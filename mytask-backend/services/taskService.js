const Task = require('../models/taskModel');

exports.createTask = async (userId, taskData) => {
  const task = await Task.create({ ...taskData, user: userId });
  return task;
};

exports.getTasks = async (userId) => {
  const tasks = await Task.find({ user: userId });
  return tasks;
};

exports.updateTask = async (taskId, taskData, userId) => {
  const task = await Task.findOneAndUpdate({ _id: taskId, user: userId }, taskData, { new: true });
  if (!task) {
    throw new Error('Task not found or unauthorized');
  }
  return task;
};

exports.deleteTask = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({ _id: taskId, user: userId });
  if (!task) {
    throw new Error('Task not found or unauthorized');
  }
};
