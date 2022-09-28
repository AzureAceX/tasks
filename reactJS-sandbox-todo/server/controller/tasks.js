import Task from "../models/task.js";
import { verifyUpdate, verifyDelete} from "../service/task.js";
import * as mongodb from "mongodb";

export const getTask = async (req, res) => {
    try{
        const task = await Task.find();
        res.status(200).json(task);
    }catch (error){
        res.status(404).json({message: error.message});
    }
};

export const createTask = async (req, res) => {
    const task = req.body;
    
    const newTask = new Task(task);
    try{
        await newTask.save();
        res.status(201).json(newTask);
    }catch (error){
        res.status(409).json({message: error.message});
    }
};

export const updateTaskStatus = async (req, res) => {
    
    const { id } = req.params;
    if(!mongodb.ObjectId.isValid(id)) return res.status(404).send(`No Task With ID: ${id}`);

    const { title, description, status, childTasks } = req.body;
    const taskToUpdateDone = {title, description, status: 'DONE', childTasks, _id: id};
    const taskToUpdateComplete = {title, description, status: 'COMPLETE', childTasks, _id: id};


    if(!taskToUpdate.childTasks){ //no child tasks so just update
        const updateObj = await Task.findByIdAndUpdate(id, taskToUpdateDone, {new : true});
        return res.json(updateObj);
    }else{//else check state of child tasks 
        let validStatusChildCounter = 0;
        const children = childTasks?.map((childId, index) => {
            let child = Task.findById(childId)
            console.log(child)
            if(child.status == "DONE" || child.status == "COMPLETE" ){
                validStatusChildCounter++;
                // return res.send("Failed to Update Task ID: " + id + " - Ch");
            }
        })
        if(validStatusChildCounter == children.length) //all are done or complete - so mark as complete
           await Task.findByIdAndUpdate(id, taskToUpdateComplete, {new : true});
        

    }
    
    return res.send("Failed to Update Task ID: " + id);
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    let targetTask = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No Task With ID: ${id}`);

    //get the entire obj, if it has no parentTask and no childIds, instant delete is approved.
    if(targetTask.childIds == "" && targetTask.parentTask == "")
        await Task.remove(id);
    else if(verifyDelete(targetTask)){
        await Task.findByIdAndRemove(id);
    }

    res.json({ message: "Task deleted successfully." });
}
