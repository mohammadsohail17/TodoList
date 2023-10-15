//import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/header";

import {Todos} from './mycomponents/Todos';
import {Footer} from './mycomponents/Footer';
import React,{useState} from 'react';
import {AddTodo} from './mycomponents/addtodo';
function App() {
  const onDelete = (todo)=>{
    console.log("hello there",todo)
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
    
  }
  const addTodo=(title,desc)=>{
    console.log("adding this dodo",title,desc)
    const sno=todos[todos.length-1].sno+1
    const mytodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    settodos([...todos,mytodo])
    console.log(mytodo)

  }
  const [todos,settodos]=useState([
    {
      sno:1,
      title:"go to the market",
      desc:"you need to go out"
    },
    {
      sno:2,
      title:"go to the mall",
      desc:"you need to go out"
    },
    {
      sno:3,
      title:"go to the dugeon",
      desc:"you need to go out"
    }
  ])
  return (
    <>
    <Header  titlename="To Do List" searchBar={true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
   
    <Footer/>
    </>
  );
}

export default App;
