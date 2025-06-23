import { useState } from "react";

import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo(){
    
    
    
    const [todos,setTodos]=useState([])
    const completed= todos.filter((todo)=>todo.done).length
    const totalTodo=todos.length

    return (

        <div>

        <Form todos={todos} setTodos={setTodos}/>
        
        <TodoList todos={todos} setTodos={setTodos}/>
       
        <Footer CompletedTodos={completed} totalTodo={totalTodo}/>


    </div>
    );
}