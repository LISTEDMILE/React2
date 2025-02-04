import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage"
import { useState } from "react";

function App() {
  // hm cheezo ko components ki tarah use kar skte hai jaise yha components me tod liya....
  // hm ek element ko do className bhi de skte h space lgake...
  const IIIItodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "3/3/2024",
    },
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "3/3/2024",
    },
  ];

  const [todoItems, setTodoItems] = useState(IIIItodoItems);
  
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
