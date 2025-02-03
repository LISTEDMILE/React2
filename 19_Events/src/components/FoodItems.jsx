import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./Item";
const FoodItems = ({ items }) => {
  let foodItems = items;
  return (
    <>
      <ul className='list-group'>
        {foodItems.map((item) => (
          <Item foodItem={item} key={item} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
