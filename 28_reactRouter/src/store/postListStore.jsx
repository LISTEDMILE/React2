import { useReducer,useState,useEffect } from "react";
import { createContext  } from "react";

export const PostList = createContext({
  postList: [],
  fetching:false,
  addPost: () => {},
  deletePost: () => {},
});



const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {

  
    const [fetching, setFetching] = useState(false);
    useEffect(() => {
      setFetching(true);
  
      // used to abort api call if we want
      const controller = new AbortController();
      const signal = controller.signal;
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then(data => {
          addInitialPosts(data.posts);
          setFetching(false);
        });
      
      return () => {
        controller.abort();
      }
    }, []);
  
  
  
  
  
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post
      
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: posts,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost , fetching}}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
