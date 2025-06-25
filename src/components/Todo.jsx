import { useState,useEffect } from "react";

import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo(){
    
    const [todos,setTodos]=useState(()=>{
        const storedTodos=localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos):[]
    })

    
    const completed= todos.filter((todo)=>todo.done).length
    const totalTodo=todos.length

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    return (

        <div>

        <Form todos={todos} setTodos={setTodos}/>
        
        <TodoList todos={todos} setTodos={setTodos}/>
       
        <Footer CompletedTodos={completed} totalTodo={totalTodo}/>


    </div>
    );
}