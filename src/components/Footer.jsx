import styles from "./footer.module.css"

export default function Footer({CompletedTodos,totalTodo}){

    return(
        <div className={styles.footer}>
            <span className={styles.item}>Completed Todos :{CompletedTodos}</span>
            <span>Total Todos :{totalTodo}</span>
            
        </div>
    )
}