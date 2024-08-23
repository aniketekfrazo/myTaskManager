const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/createTask', authMiddleware, createTask);
router.get('/getAllTask', authMiddleware, getTasks);


module.exports = router;
