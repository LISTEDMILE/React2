import { useRef } from "react";
import { MdAddCard } from "react-icons/md";

function AddTodo({ onNewItem }) {


  const todoName = useRef("");
  const dueDate = useRef("");

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    if (todoName.current.value === "" | dueDate.current.value === "") {
      alert("Empty Input Fields");
    }
    else {
      onNewItem(todoName.current.value, dueDate.current.value);
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
