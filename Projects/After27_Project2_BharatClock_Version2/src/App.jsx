
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

function App() {

  // setInterval tab use karte h jab hm koi kam krana chahe ek particaular interval me bar bar
  // isme ek interval id ki tarah ek const ya var me save hota h jiske through fir hm cancel interval lgake usko rok bhi skte h......se CurrentTime.jsx


  return (
    <div>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime/>
    </div>
  )
}

export default App
