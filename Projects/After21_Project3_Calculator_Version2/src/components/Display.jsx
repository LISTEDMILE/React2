import styles from './Display.module.css';

const Display = ({calVal}) => {
    return(
        <input id="display" value={calVal} readOnly className={styles.display} type="text" />
    )
};

export default Display;