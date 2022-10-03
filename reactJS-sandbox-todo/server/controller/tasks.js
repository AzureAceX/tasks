import Task from "../models/task.js";
import { verifyDelete, verifyParent} from "../service/task.js";
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
        verifyParent(newTask);
        res.status(201).json(newTask);
    }catch (error){
        res.status(409).json({message: error.message});
    }
};

export const updateTaskStatus = async (req, res) => {
    
    const { id } = req.params;
    if(!mongodb.ObjectId.isValid(id)) return res.status(404).send(`No Task With ID: ${id}`); //yes this is a MONGO function not Mongoose. Because Mongoose is a bully and slow

    const { title, description, status, childTasks } = req.body;

    //Possible states. Debtable execution though.
    const taskToUpdateDone = {title, description, status: 'DONE', childTasks, _id: id}; 
    const taskToUpdateComplete = {title, description, status: 'COMPLETE', childTasks, _id: id};

    let incompleteUpdate = false; //used to manange scenarios where entire task chain isnt ready to be COMPLETE
    let taskStatus = status.toUpperCase(); //is the cost of a keeping this var cheaper than the cost of executing .toUpperCase() two or three times? god only knows

    if('COMPLETE' == status)
        return res.status(200).send("Task Is Already Complete");

    //no child tasks and its currently in_prog (doesnt really matter if IN_PROG? ) -> so just update
    // if('IN PROGRESS' == taskStatus && childTasks.length == 0){
    if(childTasks.length == 0){
        const updateObj = await Task.findByIdAndUpdate(id, taskToUpdateComplete, {new : true});
        return res.json(updateObj);
    }

    //if already done, trying to get to complete -> check child states
    if( ('DONE' === taskStatus || 'IN PROGRESS' === taskStatus ) && childTasks.length >= 1){
        const children = childTasks?.map( async (childId, index) => { //tryna make this async, dont ask why halliru - it was all you
            let child = await Task.findById(childId);
            if("COMPLETE" !== child?.status?.toUpperCase()){ //if even a single child is not in complete state -> Set incompleteUpdate flag to true && later Update parent/target task as DONE instead
                incompleteUpdate = true;
            }
        })

        if(incompleteUpdate){ //-> Update parent/target task as DONE instead
            const updateObj = await Task.findByIdAndUpdate(id, taskToUpdateDone, {new : true});
            return res.send("Failed to Update Task ID: " + id + " - Child Task Are Yet To Be Completed");
        }
        //if has child and is not DONE (IN_PRog)??

        //This represtents scenario where the target is DONE and all the children are already in the DONE state and thusssssssssssssss, task is set to complete. This is what they call a dream in life
        const updateObj = await Task.findByIdAndUpdate(id, taskToUpdateComplete, {new : true});
        return res.json(updateObj);
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
