function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container thisContainer">
      <div className="row thisRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger thisButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
