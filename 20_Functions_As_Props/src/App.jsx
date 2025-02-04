import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

// jaise props pass karte h waise hi hm functions ya methods bhi pass karskte h..
//see FoodItems.jsx se hmne method pass kiya handleBuyButton jisme koi function h fir usko as props import kiya Item.jsx me fir wha wo call kara liya onClick event pe...



function App() {

  let foodItems = ["Dal", "first", "second", "third", "oneItem", "goodOne"];





  const handleOnChange = (e) => {
    console.log(e.target.value);
  
  };

  
 
  return (
    <Container>
      <h1>Healthy Food</h1>
      
      <ErrorMessage items={foodItems} />
      <FoodInput handleOnChange={handleOnChange} />
    
      <FoodItems items={foodItems} />
</Container>
  )
}

export default App
