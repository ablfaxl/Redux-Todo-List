import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import InputComponent from "./components/InputComponent";
import ListTodo from "./components/ListTodo";
import { selecTodoList } from "./Redux/todoSlice";


function App() {
const todoList = useSelector(selecTodoList)
console.log('first',todoList)
  return (
    <>
      <div className="container">
        <h1>
          <code>My Todo List</code>
        </h1>
      <InputComponent />
    {todoList.map((item,i)=>{
      return(
        <ListTodo name={item.item} done={item.done} id={item.id} />
      )
    })}
      <ListTodo />
      </div>
    </>
  );
}

export default App;
