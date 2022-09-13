import axios from 'axios';

const url = 'http://localhost:5000/tasks';

export const fetchTask = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTaskStatus = (task) => axios.put(url, task);
export const deleteTask = (task) => axios.put(url, task);