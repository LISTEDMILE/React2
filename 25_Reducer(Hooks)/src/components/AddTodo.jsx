import { useContext } from "react";
import { useRef } from "react";
import { MdAddCard } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {



  const context = useContext(TodoItemsContext);
  const todoItems = context.todoItems;
  const addNewItem = context.addNewItem;

  const todoName = useRef("");
  const dueDate = useRef("");

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    if (todoName.current.value === "" | dueDate.current.value === "") {
      alert("Empty Input Fields");
    }
    else {
      addNewItem(todoName.current.value, dueDate.current.value);
      todoName.current.value="";
      dueDate.current.value="";
    }
  }
  return (
    <form
      className="container thisContainer"
      onSubmit={handleAddButtonClicked}>
      <div className="row thisRow">
        <div className="col-6">
          <input type="text"
            placeholder="Enter Todo"
            ref={todoName} 
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDate}/>
        </div>
        <div className="col-2">
          <button
            className="btn btn-success thisButton"
            
          >
            <MdAddCard/>
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
