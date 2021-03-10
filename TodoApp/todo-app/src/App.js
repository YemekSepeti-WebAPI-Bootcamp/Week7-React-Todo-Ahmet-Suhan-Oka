import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import MainSection from "./components/MainSection";
import TodoList from "./components/TodoList";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [date, setDate] = useState("");


  
  let val = "";
  //console.log(todoInput);

  const handleChange = (e) => {
    setTodoInput((prev) => (prev = e.target.value));
  };
  const generateRandomId = (maxValue) => {
    return Math.floor(Math.random() * maxValue) + 1;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: generateRandomId(1000000),
      text: todoInput,
    });

    console.log("girdi");
  };
  const addTodo = (todo) => {
    if (todo.text === "") {
      alert("item giriniz");
    } else {
      setTodos([todo, ...todos]);
      //console.log([todo, ...todos]);
      setTodoInput("");
      setDate((prev) => (prev = getDate()));
      val = todo;
    }
  };

  //   const formOnSubmit=(e)=>{
  // e.preventDefault();

  //   }
  const deleteTodo = (todoId) => {
    const removeArr = [...todos].filter((todo) => todo.id !== todoId);
    // console.log({removeArr});
    // console.log("index:", todoId);
    setTodos(removeArr);
  };

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    return (today = dd + "/" + mm + "/" + yyyy);
  };
  useEffect(() => {
    setTodoInput("");
  }, [todos]);

  //console.log({todos:todos})

  return (
    <>
      <MainSection />
      <TodoContext.Provider
        value={{
          todos,
          todoInput,
          handleChange,
          addTodo,
          date,
          val,
          handleSubmit,
          deleteTodo,
        }}
      >
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
