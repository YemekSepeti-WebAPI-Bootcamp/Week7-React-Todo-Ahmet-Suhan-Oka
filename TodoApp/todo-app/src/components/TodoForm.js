import React, { useContext, useEffect } from "react";
import { TodoContext } from "../App";
import Todo from "./Todo";

const TodoForm = () => {
  const { addTodo, handleChange, todoInput, todos,handleSubmit,deleteTodo } = useContext(TodoContext);

  // const deleteTodo = (e) => {
  //     let deletedTodo = e.target.parentElement.parentElement.childNodes.item(0).textContent;
  //     let a = todos.filter( (todo) => todo===deletedTodo );
  //     console.log({todos});
  //     todos.pop(a);
  //     console.log({todos});
  //     let i = todos.indexOf(deletedTodo);
  //     console.log({i});
  // }
  
 


  useEffect(() => {}, [todos]);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
        <input
          className="todo-form-input too-long"
          type="text"
          placeholder="Add new todo"
          onChange={(e) => handleChange(e)}
          value={todoInput}
        />
        <input
          className="todo-form-btn"
          type="submit"
          value="Save"
          
        />
      </form>
      <ul className="todo-form-container">
        {todos.map((item,index) => {
            console.log("item : :: ",item);
          return (
            <Todo
              deleteTodo={deleteTodo}
              item={item}
              todoId={item.id}
              key={index}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoForm;

/* 




*/
