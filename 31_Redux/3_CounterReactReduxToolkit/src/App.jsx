import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controlls from "./components/Controlls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivacyMessage from "./components/PrivacyMessage";

// Redux up to a little extent do work the work done by contentProvider and useReducer but it does it more perfectionally here we can use it multiple times which does not effect project much.

// here we furst created counterReducer in index.js which create a reducer and then we created a store means the now counterReducer can be used we created a store which will handle now ..
 
// now we can define functions and actions and also we wrap our main file or file where this redux is neccessary see main.jsx wrapped with Provider and as props we given the store we created ....

// now to use the store see DisplayCounter.jsx with the syntax use any of the thing in store using useSelector hook.....

// TO  use dispatch feature we can use useDisptch () directly see Controlls.jsx....



function App() {
  const privacy = useSelector(store => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy?<PrivacyMessage/>:<DisplayCounter />}
          

          <Controlls />
        </div>
      </Container>
    </center>
  );
}

export default App;
