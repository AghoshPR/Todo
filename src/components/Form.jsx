import {useState} from "react"
import styles from "./form.module.css"
export default function Form({todos,setTodos}){


    const [todo,setTodo]=useState({name:"",done:false})

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
        console.log("The list of tasks: " , todos)
    }

    return(

        <form className={styles.todoform} onSubmit={handleSubmit}>

            <div className={styles.parentclass}>

                <input  
                    className={styles.input}    
                    onChange={(e)=>setTodo({name:e.target.value,done:false})}
                    type="text"
                    placeholder="Enter Todo "
                    value={todo.name} />
                    <button className={styles.button} type="submit">Add</button>


            </div>            



        </form>
    )
}