import React from 'react';
import {useState} from 'react';
export const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const Submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or desc is blank");
        }
        props.addTodo(title,desc)

    }
  return (
    <div className="container"><form onSubmit={Submit}>
    <h3>Add a ToDo</h3>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo Title</label>
      <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Todo Desc</label>
      <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
    </div>
    
    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
  </form></div>
  )
}
