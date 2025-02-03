// jsx ka simple matlab h js with xml jo js aur html type kuch join karke use kare
// components are nothing but the functions which we export to use somewhere like here App...
// return <h1> matlab ek html element h1 return kardiya function App ke through...
// yha pe hmne generally kiya kya h ki pehle index.html run hogi usme sabse pehle ek emply root element div h id=root ke sath fir ek script tag h jisse script run hui main.jsx jisme likha tha ki bhai root id wale div me app.jsx ke app function ko render kardo fir app.jsx me html ya xml tag h jo sidha render ho gye.....

// hm apne khud ke components bna skta h jaise button.jsx

// Button.jsx se import karke as component <Button></Button> use karlia

// we can now dynamically add values see Hello.jsx...


import Button from "./Button";
import Hello from "./Hello";
import Random from "./Random";

function App(){
  return(
  <div>
    <h1>
    Hello World
  </h1>
  <Button></Button>
  <Hello/>
  <Random/>
  <Random/>
  <Random/>
  <Random/>
  <Random/>
  </div>
)}

export default App;