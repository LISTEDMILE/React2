import styles from './FoodInput.module.css';

const FoodInput = ({handleOnKeyDown}) => {
    return <input type='text' className={styles.input} placeholder='Food Item'
    onKeyDown={handleOnKeyDown}
    />
};

export default FoodInput;