import express from 'express';

import { getTask, createTask, updateTaskStatus } from '../controller/tasks.js';

const router = express.Router();

//default
router.get('/', getTask);
router.post('/', createTask);
// router.patch('/', updateTaskStatus);

export default router;