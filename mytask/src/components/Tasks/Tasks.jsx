import React, { useState, useEffect, useCallback } from 'react';
import AddTask from './AddTask';
import AllTasks from './AllTasks';
import { useNavigate } from 'react-router-dom';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loadTask, setLoadTask] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    } else {
      getAllTask(token);
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
      if(loadTask){
      getAllTask(token);
    }
    }
  }, [loadTask]);

  const handleAddTask = useCallback((newTask) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    createTask(newTask, token);
  }, [navigate]);

  const createTask = async (newTask, token) => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks/createTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newTask)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create task');
      }

      const createdTask = await response.json();
      console.log("helloooo",createdTask)

      if (createdTask && createdTask.success) {
        setTasks((prevTasks) => [...prevTasks, createdTask]);
        setLoadTask(true)
        // getAllTask(token);
        console.log("Task", createdTask);
      }

    } catch (error) {
      console.error('Error', error.message);
    }
  };

  const getAllTask = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks/getAllTask', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch tasks');
      }

      const tasksData = await response.json();
      setTasks(tasksData?.tasks || []);
      console.log("Tasks", tasksData);

    } catch (error) {
      console.error('Error', error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-gray-100 p-6 lg:p-12">
      <AddTask onAddTask={handleAddTask} />
      <AllTasks tasks={tasks} />
    </div>
  );
}
