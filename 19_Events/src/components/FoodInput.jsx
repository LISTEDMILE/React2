import styles from './FoodInput.module.css';

const FoodInput = () => {
    return <input type='text' className={styles.input} placeholder='Food Item'
    onChange={(e) => console.log(e.target.value)}
    />
};

export default FoodInput;