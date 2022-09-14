import Task from "../models/task.js";


export const preCreation = async (req, res) => {
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

/*

----------------
populate CHILD TASKS and update in DB

why
- so when you try to delete a task or update task, we can use that column in doc to search through the array of children, get their states and see if it can be deleted markede as completed 
(foreach(task in  childasks: if task.status != complete return "One or more child tasks are not completed, this task cannot be deleted or updated as complete."))
- if they have no child the automatially we can mark it as complete

when is a child
- on creation, we set parent task. So use .parentTask to find parent task, and append .title to the parents record


*/