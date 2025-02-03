import ErrorMessage from "./ErrorMessage";
import Item from "./Item";
import styles from "../components/Item.module.css";
// agar styles.me (-) use karne pade to usko aise bhi likh skte h.['']...

const FoodItems = ({items}) => {
    let foodItems = items;
    return(
    <>
            <ul className={`${styles.ulc} list-group-item `}>
                {foodItems.map(item => <Item foodItem={item} key={item}/>)}
      </ul>
      <hr />
      <h1>If same with condition statements...</h1>

           
            <h1>Healthy Food</h1>
            <ErrorMessage items={foodItems} />
      <ul className="list-group">
        {foodItems.map(item => {
         return (item.length >= 6) ? <li key={item} className="list-group-item">{item}</li>
            : <li key={item} className='list-group-item'> Length less than 6</li>
        })}
            </ul>
            
        </>
)};

export default FoodItems;