function TodoItem2() {

    let todoName = 'Buy Milk';
    let todoDate = '4/10/2023';

    return (
 <div class='container thisContainer'>
          <div class="row thisRow">
            <div class="col-6">{todoName}</div>
            <div class="col-4">{todoDate}</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger thisButton">
                Delete
              </button>
            </div>
          </div></div>
     
      );
  }
  
  export default TodoItem2;
  