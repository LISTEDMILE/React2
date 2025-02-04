import Display from './components/Display'
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === 'C') {
      setCalVal("");
    }
    else if (buttonName === "=") {
      // eval is used to calculate a string expression as mathematical expression....
      const result = eval(calVal);
      setCalVal(result);
    }
    else {
      const newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div id="calculator" className={styles.calculator}>
      
      <Display calVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
