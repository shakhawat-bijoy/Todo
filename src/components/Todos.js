import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {

   const todos = useSelector(state => state.todos)
   console.log(todos);
   const dispatch = useDispatch();

  //  const handleEditTodo = (id, newText) => {
  //   dispatch(editTodo({ id, newText })); // Dispatching the editTodo action with id and new text
  // };
    
  return (
    <>
    <div className='text-xl font-bold'>Todos</div>


      <ul>    
        {todos.map((todo) => (
            <li 
            key={todo.id} 
            className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded shadow-md max-w-[510px] mx-auto mt-5"
        >
            <span className="text-lg">{todo.text}</span>
            <div className='flex gap-5'>
              {/*               
                <button onClick={() => handleEditTodo(todo.text)}>
                  Edit Todo
                </button> 
              */}

              <button 
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => dispatch(removeTodo(todo.id))}   
              >
                  Remove
              </button>
            </div>
        </li>
        ))}
      </ul>
    </>
  )
}

export default Todos