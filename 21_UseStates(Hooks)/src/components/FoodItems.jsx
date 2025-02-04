import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./Item";
import { useState } from 'react';
const FoodItems = ({ items }) => {
  let foodItems = items;
  let [activeItems, setActiveItems] = useState([]);
  let newItems = [];
  
  let onBuyButton = (e, item) => {

    if (activeItems.includes(item)) {
      newItems = activeItems;
      newItems = newItems.filter((item1) => item1!==item);
    }
    else {
      newItems = [...activeItems, item];
    }
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className='list-group'>
        {foodItems.map((item) => (
          <Item foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(e)=>onBuyButton(e,item)}
            key={item} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
