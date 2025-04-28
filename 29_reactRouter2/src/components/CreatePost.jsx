import { useContext } from "react";
import { PostList } from '../store/postListStore'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate();

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const reactionsDislikeElement = useRef();
  const tagsElement = useRef();

  const { addPost } = useContext(PostList);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = titleElement.current.value;
    const postBody = bodyElement.current.value;
    const postReactions = reactionsElement.current.value;
    const postDislikeReactions = reactionsDislikeElement.current.value;
    const postTags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    reactionsDislikeElement.current.value = "";
    tagsElement.current.value = "";


    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: {
          likes: postReactions,
          dislikes:postDislikeReactions
        },
        userId: userId,
        tags: postTags,
      })
    })
    .then(res => res.json())
      .then(res => {
        addPost(res);
        navigate('/');
      });
    

    
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="User ID  (use only 151 type integer)"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleElement}
          placeholder="Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <input
          type="textarea"
          rows="4"
          className="form-control"
          ref={bodyElement}
          id="body"
          placeholder="Enter your content"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No. of Reactions
        </label>
        <input
          type="number"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many reacted"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactionsDislike" className="form-label">
          No. of Dislikes
        </label>
        <input
          type="number"
          ref={reactionsDislikeElement}
          className="form-control"
          id="reactionsDislike"
          placeholder="How many Disliked"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags with spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
