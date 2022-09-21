import express from 'express';

import { getTask, createTask, updateTaskStatus, deleteTask } from '../controller/tasks.js';

const router = express.Router();

//default
router.get('/', getTask);
router.post('/', createTask);
router.patch('/:id', updateTaskStatus);
router.delete('/:id', deleteTask);

export default router;