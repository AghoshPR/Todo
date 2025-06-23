import {useState} from "react"
// import styles from "./form.module.css"
export default function Form({todos,setTodos}){


    const [todo,setTodo]=useState({name:"",done:false})

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
        console.log("The list of tasks: " , todos)
    }

    return(
         <form  onSubmit={handleSubmit}>
                    <input      
                    onChange={(e)=>setTodo({name:e.target.value,done:false})}
                    type="text"
                    value={todo.name} />
                    <button type="submit">Add</button>
                </form>
    )
}