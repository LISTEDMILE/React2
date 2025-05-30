import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Item.module.css"

const Item = (props) => {
    return (
        <li className="list-group-item">
            <span className={styles.Span}>{props.foodItem}</span>
            <button className={styles.button}
            onClick={()=>console.log("Button Clicked")}
            >Buy</button>
        </li>
)
};

export default Item;