import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./Item";
const FoodItems = ({ items }) => {
  let foodItems = items;
  return (
    <>
      <ul className='list-group'>
        {foodItems.map((item) => (
          <Item foodItem={item} handleBuyButton={() => {
            console.log("Buy Button Clicked")
          }} key={item} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
