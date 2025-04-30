import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postListStore";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  

  return (
    <div>
      {postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
