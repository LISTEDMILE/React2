import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Controlls() {

    const dispatch = useDispatch();
    const inputNumber = useRef();

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
        
    }
    
    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    }

    const handleAdd = () => {
        dispatch({ type: "ADD", payload: { num: inputNumber.current.value } });
        inputNumber.current.value = "";
    }

    const handlePrivacyToggle = () => {
        dispatch({ type: "PRIVACY_TOGGLE",  });
        inputNumber.current.value = "";
    }
  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary" onClick={handleIncrement}>
                  
        +1
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleDecrement}>
        -1
              </button>
              
              <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>
        Privacy
      </button>
     
  
      
          </div>
          <div className=" gap-2 d-sm-flex justify-content-sm-center">
      <input type="number" placeholder="Enter no." ref={inputNumber}  />
        
      
      <button type="button" className="btn btn-info" onClick={handleAdd}>
        ADD
      </button>
     
  
      
          </div>
          </>
  );
}
