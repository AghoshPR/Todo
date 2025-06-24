import { useState } from "react"
import styles from "./todoitem.module.css"
export default function TodoItem({item,todos,setTodos}){

    const [isEditing,setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(item.name)
     const [error, setError] = useState("");


    function handleDelete(item){
        console.log('delete clicked',item)
        setTodos(todos.filter((todo)=>todo !== item))
    }

    function handleClick(name){
        const newArray= todos.map((todo)=>todo.name === name ? {...todo, done: !todo.done } : todo )

        setTodos(newArray)
        console.log(newArray)
    }

    function handleEdit(x){
        setIsEditing(true)
    }

    function handleSave(){

        const txt=editedText.trim()
       
        if (txt === "") {
            setError("Task can't be empty!");
            return;
        }

        const updatedTodos = todos.map((todo) => todo.name === item.name ? { ...todo, name: txt } : todo);
        
        setTodos(updatedTodos)
        setIsEditing(false)
        setError("");
    }



    const className = item.done ? styles.completed:""
    return (
        <div className={styles.item}>

            <div className={styles.itemName}>

               {isEditing ?(

                     <>
                    <input type="text"
                    className={styles.input}
                     value={editedText} 
                    onChange={(e)=>setEditedText(e.target.value)} 
                    
                    
                    />

                    <button className={styles.deleteButton} onClick={handleSave}>Save</button>
                    {error && <p className={styles.error}>{error}</p>}
                </>


               ):(

                <>
                    <span className={className} onClick={()=>handleClick(item.name)} >{item.name}</span>

                    <span className={styles.completed}>

                        <button className={styles.deleteButton} onClick={()=>handleDelete(item)} >X</button>

                    </span>

                    <span className={styles.completed}>
                        <button className={styles.deleteButton} onClick={handleEdit}>Edit</button>
                    </span>
                </>
               )
            }
            <hr />

            </div>

        </div>
    )
        
}