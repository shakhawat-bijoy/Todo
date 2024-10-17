import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    
    <form onSubmit={addTodoHandler} className="flex flex-col items-center space-y-4 mt-20 mb-10">
      <input
        type="text"
        className="bg-white appearance-none rounded-lg w-full max-w-lg py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:border-transparent shadow-md"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gray-500 text-white w-full max-w-lg py-2 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
