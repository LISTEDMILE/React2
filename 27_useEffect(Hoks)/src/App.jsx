
import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./Components/Header";
import PostList from "./components/PostList";
import SideBar from "./components/Sidebar";
import PostListProvider from "./store/postListStore";

function App() {

  // useEffect hook is used when we want any state to reprint when any on the state change like in useEffect we provide an array after the hook in which we provide some variables jinke chantge hone par hmara jo code h run ho jae agar array nhi denge to page pe kuch bhi change hoga to run ho jaega code agar empty array dete h to page ke initial load pe run hota aur agar koi var dete h to initial aur jab wo var change hoga......


  // agar hm chahte h jaise ho poora useEffect ya keh skte h poora component kill ho jae ya tree se hat jae to jo bhi process hm us killing ke time pe chahte h wo hm useEffect ke return state me rakh skte h jo tab run hoga jab wo component ht rha hoga.
  // generally jab koi process chal rhi ho aur user migrate kar jae to wo process end karne ke liye...
  

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
