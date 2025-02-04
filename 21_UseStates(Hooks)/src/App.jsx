import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

// jaise props pass karte h waise hi hm functions ya methods bhi pass karskte h..
//see FoodItems.jsx se hmne method pass kiya handleBuyButton jisme koi function h fir usko as props import kiya Item.jsx me fir wha wo call kara liya onClick event pe...

// use state is a hook used to store values which is to be change without reloading the page and change instantly ye do elements ka array return karta h 0 index pe variable hoga aur 1 index pe function jo us var ke change hone pe run karega...

// syntax see textStateArr the value inside the () is the default value for the variable....
// ab yha hmne ye declare kar diya useState ab dekho on change pe update wala function run hoga handleOnChange method dekho jisse textToShow jha bhi h sab update ho jaega dekho <input/> component ke bad....

// onKeyDown is also an event jo pichla kam tab run karta h jab agli key press ho matlab jab pichli key down hoke nhi key aae to run ho

// [...array,new]  iska matlab h ki jo pichli array thi uske sare elements aise hi aur uske bad new wale elements....

function App() {
  let [foodItems, setFoodItems] = useState(["Dal", "first", "second"]);

  /* let textStateArr = useState();
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];*/

  // preferrable.
  // easy method =>    let [textToShow,setTextState] = useState("lksdf")

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <Container>
      <h1>Healthy Food</h1>

      <FoodInput handleOnKeyDown={handleOnKeyDown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
