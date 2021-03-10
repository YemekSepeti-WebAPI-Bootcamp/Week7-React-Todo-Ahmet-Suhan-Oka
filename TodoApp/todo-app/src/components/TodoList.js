import React, { useContext } from 'react'
import { TodoContext } from '../App';
import TodoForm from './TodoForm';


const TodoList = () => {


  //const {addTodo} = useContext(TodoContext);
   

    return (
        <div className="todo-list-container">
          <div className="todo-list-inner-container">
          <h1>What's your Plan for Today?</h1>
           <TodoForm />
          </div>
        </div>
    )
}

export default TodoList
