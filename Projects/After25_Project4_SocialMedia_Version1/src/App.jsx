
import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./Components/Header";
import PostList from "./components/PostList";
import SideBar from "./components/Sidebar";
import PostListProvider from "./store/postListStore";

function App() {

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
