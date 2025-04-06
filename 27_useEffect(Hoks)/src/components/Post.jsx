import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/postListStore";

const Post = ({ post } ) => {
  const { deletePost } = useContext(PostList);
  console.log(post)
    return (
        <div className="card post-card">{post.id}
  
  <div className="card-body">
                <h5 className="card-title">{post.title}
                    
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                <MdDelete />
  </span>
    </h5>
                <p className="card-text">{post.body}</p>
                 {post.tags.map((tag) => (
                    <span className="badge text-bg-primary hashtag">{tag}</span>
                ))} 

<div className="alert alert-success reactions" role="alert">
  <span className="me-5">Likes : {post.reactions.likes}</span> <span>Dislikes:{post.reactions.dislikes}</span>
</div>
                
  </div>
</div>
    )
}

export default Post;