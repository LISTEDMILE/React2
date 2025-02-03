import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  // jsx me sirf ek hi element render kar skte h to multiple ke lye unhe wrap karna padta tha but through React.Fragment wo dhang se run bhi hoga but browser me koi nya element add bhi nhi hoga y fir <></> use karo same...
  //map method is used when we want multiple items from a place to be inserted or touched
  // all items should have a key for best practices to update only the required item (id)....
  


  //V.V.V Imp  =>   {  agar hm ek file ki value, obj ya kuch bhi kisi aur me use karna chahte h to usme use hota h props jsie FoodItems.jsx me hmne <Item/> component use kiya aur usme ek parameter jaise dete h  waise props de diya to jitni bhi value pass kare sab ek (props) obj ki tarah chli jaenge jaise Item.jsx me hmne usko aise use kiya props dala function ke parameter me fir use karne ke liya props.Jo bhi chahiye jaise yha props.foodItem    }...

  // direct aise bhi parameter le skte h Item.jsx me Item=({foodItem}) karke aise destructure ho jaega ab props. karke use nhi karna hoga


  // react me ek hi css file me poora sab likhna padta h to bohot mess ho jata h to uske liye hm use karte h css module koi bhi file ka nam.modules.css se save karo
  // normal import ki jagah import karo as object see FoodItems.jsx
  //ab usko use karlo kaise ke liye FoodItems.jsx....


  let foodItems = ["Dal", "first", "second", "third", "oneItem", "goodOne"];
 
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
</React.Fragment>
  )
}

export default App
