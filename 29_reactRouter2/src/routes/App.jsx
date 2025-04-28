
import "./App.css";
import Footer from "../components/Footer";
import Header from "../Components/Header";
import SideBar from "../components/Sidebar";
import PostListProvider from "../store/postListStore";
import { Outlet } from "react-router-dom";

function App() {
 
  // if hme chahiye ki kisi route pe jate hi koi function run ho jae to uske liye hm loader use kar skte h see main.jsx hmne / route pe loader : postLoader use kiya jo ki ek function h postList me..

 // ab is loader ke data ko access karne ke liye direct we can use hook useLoaderData see postList.jsx.......
  

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          

          <Outlet />
          

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
