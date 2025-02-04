import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Item.module.css"

const Item = (props) => {
    //props.bought && 'active' is same as props.bought ? 'active'
    return (
        <li className={`list-group-item ${props.bought && 'active'}`}>
            <span className={styles.Span}>{props.foodItem}</span>
            <button className={styles.button}
            onClick={props.handleBuyButton}
            >{props.bought?"cancel":"Buy"}</button>
        </li>
)
};

export default Item;