import {useState} from "react"
import styles from "./form.module.css"

export default function Form({todos,setTodos}){

    const [todo,setTodo]=useState({name:"",done:false})
    const [error, setError] = useState("");

    function handleSubmit(e){

        
        e.preventDefault();

         if (todo.name.trim() === "") {
            setError("Task can't be empty!");
            return;
        }

        if(todo.name.includes(todo)){
            setError("Task already exist")
            return

        }

        const isDuplicate = todos.some((item)=>item.name.toLowerCase() === todo.name.trim().toLowerCase() );

        if(isDuplicate){
            setError("Task Already Exists!")
            return
        }

        setTodos([...todos,todo])
        setTodo({name:"",done:false})
        setError("");
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

            {error && <p className={styles.error}>{error}</p>}


        </form>
    )
}