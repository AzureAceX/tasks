import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    parentTask: Number,
    title: String, 
    description: String, 
    status: String,
    childTasks: [String], 
});


const Task = mongoose.model('Task', taskSchema);

export default Task;