import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  // hm cheezo ko components ki tarah use kar skte hai jaise yha components me tod liya....
  // hm ek element ko do class bhi de skte h space lgake...
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class='items-container'><TodoItem1 />
      <TodoItem2 /></div>
      
    </center>
  );
}

export default App;
