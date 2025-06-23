import styles from "./todoitem.module.css"
export default function TodoItem({item,todos,setTodos}){

    function handleDelete(item){
        console.log('delete clicked',item)
        setTodos(todos.filter((todo)=>todo !== item))
    }

    function handleClick(name){
        const newArray= todos.map((todo)=>todo.name === name?{...todo,done:!todo.done}:todo)

        setTodos(newArray)
        console.log(newArray)
    }
    const className = item.done ? styles.completed:""
    return (
        


        <div className={styles.item}>

                <div className={styles.itemName}>
                        <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>

                        <span className={styles.completed}>
                            <button className={styles.deleteButton} onClick={()=>handleDelete(item)}>X</button>
                        </span>
                        <hr />
                </div>
        </div>
        
    )
}