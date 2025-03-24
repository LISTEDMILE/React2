import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";


const TodoItems = () => {
  
  const context = useContext( TodoItemsContext );
  const todoItems = context.todoItems;
  const deleteItem = context.deleteItem;
  
  return (
    <>
          <div className={styles.itemsContainer}>
        {todoItems.map(item =>
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            deleteItem={deleteItem}
          />)}
        
      </div>
    </>
  );
};

export default TodoItems;
