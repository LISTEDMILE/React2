import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage"
import { useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";



const todoItemsReducer = (currentTodoItems,action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === 'NEW_ITEM') {
    const newTodoItems = [ { name: action.payload.itemName, dueDate: action.payload.itemDueDate },...newTodoItems];
  }
  else if (action.type === 'DELETE_ITEM') {
    
    const newTodoItems = newTodoItems.filter((item) => item.name!== action.payload.todoName);
  }
  return newTodoItems;
}

function App() {
  
  // yha hmne useState ki jagah useReducer use kiya isme
  // const [var jisme store hogi values ,  value ko update karne ke liye function to initialize update   ] = useReducer (jo initialize function jab run karenge to ye function me jo bhi hoga execute hoga    ,    yha pe var ki initial value );

  // ab jaise yha dispatchTodoItems is used for initializing jisme ek object jaeega attribute ki tarah.
  //  this attribute is an object jisme type: koi string basically action ka nam and  payload:  isme jo bhi executing fuctions ke arguments

  // ab jo actual function h jo run hoga wo bnaenge like.
  // isme do attributes honge currentState matlab jo abhi value h hmare actual var ki aur action
  ///  fir inside function comparison karenge by type: action.type se kyuki jo object hmne diya tha usme type: bhi h 
  // jab true ho jae to required code execute karke finall value of var return kar denge jo fir apne var ki value hogi updated....

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer,[]);
  
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName
      }
    }
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
