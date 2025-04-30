
import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";


const CreatePost = () => {

  
  return (
    <Form method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          name="userId"
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
          name="title"
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
          id="body"
          name="body"
          placeholder="Enter your content"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No. of Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          name="reactions"
          placeholder="How many reacted"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactionsDislike" className="form-label">
          No. of Dislikes
        </label>
        <input
          type="number"
          className="form-control"
          name="reactionsDislike"
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
          className="form-control"
          name="tags"
          id="tags"
          placeholder="Enter tags with spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction (data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
  .then(res => res.json())
    .then(post => {

      console.log(post);
    });
  
  return redirect("/");

}

export default CreatePost;
