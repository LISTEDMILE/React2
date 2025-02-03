import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {

  let foodItems = ["Dal", "first", "second", "third", "oneItem", "goodOne"];
 
  return (
    <Container>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodInput/>
      <FoodItems items={foodItems} />
</Container>
  )
}

export default App
