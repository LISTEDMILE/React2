import { useReducer } from "react";
import { createContext } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  });

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST'){
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
  }
  else if(action.type === 'ADD_POST'){
    newPostList = [action.payload, ...currPostList]
  }
    return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,[{id:'1',title:'one',body:'one',reactions:1,userId:'oneuser',tags:['one',"two"]},{id:'2',title:'one',body:'one',reactions:1,userId:'oneuser',tags:['one',"two"]},{id:'3',title:'one',body:'one',reactions:1,userId:'oneuser',tags:['one',"two"]}]);
  const addPost = (userId, postBody, postTags, postTitle, postReactions) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {id:Date.now(),title:postTitle,body:postBody,reactions:postReactions,userId:userId,tags:['one',"two"]}
    })
  };
    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId:postId,
            },
      })
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
