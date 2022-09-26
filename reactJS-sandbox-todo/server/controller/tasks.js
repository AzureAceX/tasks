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
    // const updatedTask = req.body;
    // const taskToUpdate = new Task(updatedTask);
    const { title, description, status, childTasks } = req.body;

    if(!mongodb.ObjectId.isValid(id)) return res.status(404).send(`No Task With ID: ${id}`);
    
    // const taskToUpdate = {title, description, status: 'DONE', childTasks, _id: id};
    // taskToUpdate.status = "DONE";         
    console.dir(taskToUpdate);
    if(verifyUpdate(updatedTask)){
        const taskToUpdate = {title, description, status: 'DONE', childTasks, _id: id};
    }
    else
        return "Cannot Update Selected ID"

    await Task.findByIdAndUpdate(id, taskToUpdate, {new : true});
    res.json(taskToUpdate);
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
