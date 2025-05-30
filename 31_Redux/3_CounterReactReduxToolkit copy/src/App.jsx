import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controlls from "./components/Controlls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivacyMessage from "./components/PrivacyMessage";

// ab isko aur acha karne ke liye hm store ki slices bhi alag alag files me bna skte h.......

// createConfigure hoga index se aur baki actions aur slices export honge apni individual files se aur index.js me reducer bnane ke liye slice import honge aur jya pe actions use hue wha pe import change hoga....


function App() {
  const privacy = useSelector((store) => store.privacy);
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
