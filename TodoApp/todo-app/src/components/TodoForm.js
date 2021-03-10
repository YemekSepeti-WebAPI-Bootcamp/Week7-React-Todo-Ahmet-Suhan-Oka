import React, { useContext, useEffect,  } from "react";
import { TodoContext } from "../App";
import Todo from "./Todo";

const TodoForm = () => {
  const { handleChange, todoInput, todos,handleSubmit,deleteTodo,isInputInRange } = useContext(TodoContext);


  // const deleteTodo = (e) => {
  //     let deletedTodo = e.target.parentElement.parentElement.childNodes.item(0).textContent;
  //     let a = todos.filter( (todo) => todo===deletedTodo );
  //     console.log({todos});
  //     todos.pop(a);
  //     console.log({todos});
  //     let i = todos.indexOf(deletedTodo);
  //     console.log({i});
  // }
  const a = ["M", "a", "k", "s", " ", "2",  "0", " ", "k", "a", "r", "a", "k", "t", "e", "r", " ", "y", "a", "z", "a", "b", "i", "l", "i", "r", "s", "i", "n", "i", "z"];

  console.log({todos});
  

  useEffect( ()=>{
    let rotateVal = 0 ; 

    const btn = document.querySelector('.btn-delete-all');
    const rotate = ()=>{
      const interval = setInterval(()=>{
        if(rotateVal >=810){
          clearInterval(interval);
          rotateVal=0;
          btn.addEventListener('mouseenter',rotate);
        }else{
          rotateVal++;
          btn.style.transform = `rotate(${rotateVal}deg)`;
          btn.removeEventListener('mouseenter',rotate);
            
        }
      },10);

      
    }
    btn.addEventListener('mouseenter',rotate);


  },[] );
  
  
  return (
    
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
      {
        
          <div className="control">
        <label>
          {
              a.map( (letter,index) => {
                return (
                  <span className={isInputInRange?'down text-small  ':' up text-big'}  key={index} style={{transitionDelay:`${index*50}ms`}}>{letter}</span>
                  
                )
              }  )
            
          }
        </label>
      </div>
        
      }
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
            //console.log("item : :: ",item);
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
      
      <button className="btn-delete-all"
        type="button"
        >Delete All</button>
      
    </>
  );
};

export default TodoForm;

