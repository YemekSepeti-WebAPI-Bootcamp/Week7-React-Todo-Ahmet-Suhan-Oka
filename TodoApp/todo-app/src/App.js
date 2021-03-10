import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import MainSection from "./components/MainSection";
import TodoList from "./components/TodoList";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [date, setDate] = useState("");

  const [isInputInRange, setIsInputInRange] = useState(true);

  let val = "";
  //console.log(todoInput);

  const handleChange = (e) => {
    setTodoInput((prev) => (prev = e.target.value));
  };

  const controlTodoInputLenght = () => {
    if (todoInput.length > 20) {
      setIsInputInRange((prev) => (prev = false));
      //console.log({inputIsInRange});
    } else {
      setIsInputInRange((prev) => (prev = true));
    }
  };
  useEffect(() => {
    controlTodoInputLenght();
    // console.log({isInputInRange});
  }, [todoInput]);

  const generateRandomId = (maxValue) => {
    return Math.floor(Math.random() * maxValue) + 1;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: generateRandomId(1000000),
      text: todoInput,
    });

    //console.log("girdi");
  };
  const addTodo = (todo) => {
    if (todo.text === "") {
      alert("item giriniz");
    } else if (!isInputInRange) {
      alert("Max karakter sayısını aştınız!");
    } else {
      setTodos([todo, ...todos]);
      //console.log([todo, ...todos]);
      setTodoInput("");
      setDate((prev) => (prev = getDate()));
      val = todo;
    }
  };
  useEffect(() => {
    const li = document.querySelectorAll(".todo-form-container li");
    let rotateVal = 0;
    if (li.length > 0) {
      console.log(li[0].children[0].children[0]);
    }
    const rotate = () => {
      const interval = setInterval(() => {
        if (rotateVal >= 810) {
          clearInterval(interval);
          rotateVal = 0;
          li[0].style.transform = `rotate(${rotateVal}deg)`;
        } else {
          rotateVal += 1;

          li[0].style.transform = `rotate(${rotateVal}deg)`;
        }
      }, 10);
    };
    if (li.length > 0) {
      rotate();
    }
  }, [todos]);

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

  // const updateTodo=(todoId,newValue)=>{
  //   setTodos( (prev) => {
  //     return ( prev.map( (item) =>{
  //       return (item.id === todoId?newValue:item);
  //     } ));
  //   } );
  // }
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
          isInputInRange,
          setTodos,
        }}
      >
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
