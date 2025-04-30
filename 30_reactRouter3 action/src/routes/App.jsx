
import "./App.css";
import Footer from "../components/Footer";
import Header from "../Components/Header";
import SideBar from "../components/Sidebar";
import PostListProvider from "../store/postListStore";
import { Outlet } from "react-router-dom";

function App() {
 
  // we in react do not need to define methods for post and to clean the input area explicitely if we use Form in place of form we have to provide action attribute in our route component see main.jsx and there we can provide any function ....

  // ab us data ko access karne ke liye use kar skte h data.request.formData(); see CreatePost.jsx...

  // to get actual data use Object.fromEntries(); method see CreatePost.jsx....

  // action function me return value dena jaruri h.
  //also we can use redirect();
  

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
