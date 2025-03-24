import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage"
import { useState } from "react";

function App() {
  // form is used to send multiple entries all together not individally.....
  // form ke andar sabhi butten by default submit hote h agar nhi rkhne submit to change karna padega...
  // butten click karte hi request server pe chli jaegi aur page reload to prevent this we can use onsubmit jo event h usme event.preventDefault()...
    

  const [todoItems, setTodoItems] = useState([]);
  
  const onNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems,
      { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (name) => {
    const newDeletedItems = todoItems.filter((item) => item.name!== name);
    setTodoItems(newDeletedItems);
  };

  return (
    <center className="todo-container">
      <AppName />
     
      <AddTodo onNewItem={onNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
