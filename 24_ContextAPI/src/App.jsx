import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage"
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  

  // agar koi aisa data h jo multiplt files me chahiye ya fir parent se grandchild node pe chahiye to unneccessary props pass na karne pade uske liye ContextAPI ka use karte h
  //  yha hmne pehle store folder me todo-items-store.jsx file bnai jisme create context ko import karke ek context bnaya ab usko main parent file me import kiya fir jin elements me wo chahiye usko ek component me wrap kar diya <context.Provider aur usme uski value bhi dedi kya hogi agar karna chahe to yha update bhi kar skte h>  fir jo child nodes h unme useContext aur jo context bnaya wo import kiya aur syntax ke help se unko use kar liya see TodoItems.jsx......


  //ab jaise values pass karte h waise hi methods bhi pass kar skte h basically objects pass kar skte h...


  // agar pehle hi default value dena chahte h to hm jha context create kiya ie todo-items-store.jsx me kr skte h usse auto complete bhi kam karegaa......
  const [todoItems, setTodoItems] = useState([]);
  
  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((newTodoItems) => [ { name: itemName, dueDate: itemDueDate },...newTodoItems]);
  };

  const deleteItem = (name) => {
    const newDeletedItems = todoItems.filter((item) => item.name!== name);
    setTodoItems(newDeletedItems);
  };

  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem:deleteItem
    }}>
    <center className="todo-container">
      <AppName />
      <AddTodo/>
      <WelcomeMessage />
      <TodoItems />
      </center>
      </TodoItemsContext.Provider>
  );
}

export default App;
