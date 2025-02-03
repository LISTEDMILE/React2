function AddTodo(){
    return (
        <div class="container thisContainer">
        <div class="row thisRow">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo"/>
          </div>
          <div class="col-4">
            <input type="date"/>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success thisButton">Add</button>
          </div>
        </div>
        </div>
    )
}

export default AddTodo