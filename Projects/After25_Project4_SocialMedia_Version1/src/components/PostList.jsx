import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postListStore";

const PostList = () => {
    const { postList } = useContext(PostListData);
    return (
        <div>
            {postList.map((post) => (
                <Post key={post.id} post={ post } />
            ))}
       
            </div>
    )
}

export default PostList;