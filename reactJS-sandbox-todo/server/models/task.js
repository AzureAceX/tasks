import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    taskId: Number,
    parentId: Number,
    title: String, 
    description: String, 
    childTasks: [Number], 
    status: String,
});


const Task = mongoose.model('Task', taskSchema);

export default Task;