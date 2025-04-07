
import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./Components/Header";
import PostList from "./components/PostList";
import SideBar from "./components/Sidebar";
import PostListProvider from "./store/postListStore";

function App() {

  // ab hmne yha pe kya kiya ki in createPost .jsx me abhi tak to hm bas local storage me temporarity data rakh rhe the but ab hmne add post ke liye server ka use kiya yha pe ye ek dummy server h actual post add nhi hogi but samajhne ke liye iska use kiya fir jab post add ho gyi to usi response ko use kiya locally us cheez ko dikhane ke liye add post me basically res dal diya seedha insted of individual vars  see createpost and postListStore.jsx...
  

  /// router in react use to define different components to be rendered on the basis of url on the browser

// first create router by createBrowserRouter then difine path ways as below

// then At the main component return RouterProvider with this router as prop 
// like this router ={route}

  const [selectedTab, setSelectedTab] = useState("Home");


  return (
    <PostListProvider>
  <div className="app-container">
      <SideBar setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
      <div className="content">
        <Header />
        {selectedTab === 'Home' ? <PostList/> : <CreatePost />}
        
        
        <Footer />
        </div>

      </div>
    </PostListProvider>
  );
}

export default App;
