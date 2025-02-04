import styles from './FoodInput.module.css';

const FoodInput = ({handleOnChange}) => {
    return <input type='text' className={styles.input} placeholder='Food Item'
    onChange={handleOnChange}
    />
};

export default FoodInput;