import axios from 'axios';

// const url = 'http://localhost:5000/posts';
const url = 'http://localhost:5000/tasks';

export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

export const fetchTask = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTaskStatus = (task) => axios.put(url, task);



