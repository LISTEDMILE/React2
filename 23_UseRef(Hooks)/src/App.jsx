import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage"
import { useState } from "react";

function App() {
  

  // if koi aisi situation aae jha useState se kam to ho rha h par uske liye window ya component ko bar bar reload karna padrha h(unneccessary) like in AddTodo me hmne useState use kiya tha aur jaise hi value input field ki change hoti thi useState wali value update ho jati thi aur sath me component ya page reload

  // to hmne useRef ka use kiya isme bhi lagbhag same h but isme variable ko syntax ke through update kar skte h par poora component reload nhi hoga
  // jaise ab AddTodo file me hmne pehle useRef create kiya fir ref={name} syntax se input field me attribute ki tarah rakha jiska matlab jo input ki value whi useRef wale variable ki value......





  // sometimes jab bohot  sare operation hote h to unko tackle karne ke liye async ka use karte the to aise hi yha bhi jab hm setTodoItems karenge to galti ho skti h to usko tackle karne ke liye hm value update ke bajae functional update bhi kar skte h like in this file...
  const [todoItems, setTodoItems] = useState([]);
  
  const onNewItem = (itemName, itemDueDate) => {
    setTodoItems((newTodoItems) => [...newTodoItems, { name: itemName, dueDate: itemDueDate }]);
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
