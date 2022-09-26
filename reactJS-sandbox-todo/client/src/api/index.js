import axios from 'axios';

const url = 'http://localhost:5000/tasks';

export const fetchTask = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTaskStatus = (id, updateTask) => axios.patch(`${url}/${id}`, updateTask);
export const deleteTask = (id) => axios.delete(id);