import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controlls from "./components/Controlls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivacyMessage from "./components/PrivacyMessage";

// redux me hm sahi se to kar pa rhe the but usme hmara store bohot clumsy ho jata age jake complex code me and jo hm actions use karte the wo export wagerah to hote nhi to galti ke chances rehte h aur bhi kuch cheeze to hmne redux toolkit use kiya ..

// isme sabse pehle jaise hm redux me store bnate the waise store bnaenge see counterStore in index.js syntax thoda alag hoga hm use karenge configurestore uske andar hm apna store create aur configure karenge see index.js matlab hm usme slice ka nam btaenge ki kon kon se slice h aur kis nam se use honge alag pages me sytax you can see.

// fir hm apne alag alag slice create karenge jo alag alag cheezo ke liye alag alag honge taki complex na ho jaise yha counter ko handle karne ke liye alag slice use kiya aur privcacy ke liye alag but h dono same store me  slices ka synax same file index.js me 

// fir un slices me ek object as pass karenge jisme hoga name : usme name of the slice, initialState: state ki initial value can be object or numeric or anything , reducers : isme alag alag methods honge jisme hm pass bhi kar skte h jaise state kisme old state hogi usko update karne ke liye direct operation kar skte h see index.js , action : isme payload wagerah hoga yha waise alag se jaise actions define karte the waise to nhi hi karna par payload wagerah ke liye kar skte h, 

// fir un slices ke actions ko export kardenge .......

// jaise normal abhi tak reducer bnate the jo poore app ko store provide krata tha same waise hi bnaenge see main.jsx......

// to access store simply useSelector ko use karenge jisme as props store aaega usme se store.jo bhi slice chahiye nikal lenge see DisplayCounter.jsx ......

// to use actions  we simply use dispatch (jo slice export kiye the jis nam se.method(andar if payload))......


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
