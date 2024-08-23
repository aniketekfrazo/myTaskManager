import React from 'react';

function AllTasks({ tasks }) {
  return (
    <div className="w-full lg:max-w-md lg:ml-12 mt-8 lg:mt-0">
      <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">Your Tasks</h2>
      <ul className="space-y-6">
        {tasks.map((task, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-700 mb-2">{task.description}</p>
            <p className="text-gray-500 text-sm">Due: {task.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(AllTasks);
