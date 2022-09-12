import Task from "../models/task.js";

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
        console.log(newTask.title)
        await newTask.save();
        res.status(201).json(newTask);
    }catch (error){
        res.status(409).json({message: error.message});
    }
};

export const updateTaskStatus = async (req, res) => {
    const task = req.body;
  
    // const newTask = new Task(task);
    // try{
    //     await newTask.save();
    //     res.status(201).json(newTask);
    // }catch (error){
    //     res.status(409).json({message: error.message});
    // }
};

export const deleteTask = async (req, res) => {
    const task = req.body;
  
    // const newTask = new Task(task);
    // try{
    //     await newTask.save();
    //     res.status(201).json(newTask);
    // }catch (error){
    //     res.status(409).json({message: error.message});
    // }
};
