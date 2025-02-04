import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems,handleDeleteItem }) => {
  return (
    <>
          <div className={styles.itemsContainer}>
        {todoItems.map(item => <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          handleDeleteItem={handleDeleteItem}
          key={item.name}
        />)}
        
      </div>
    </>
  );
};

export default TodoItems;
