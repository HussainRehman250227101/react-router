import { useState } from "react";
import api from "../../api/api";
import { useLoaderData, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const EditPost = () => {
  const post = useLoaderData();
  const [editTitle, setEditTitle] = useState(post.title);
  const [editBody, setEditBody] = useState(post.body);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const updatedPost = {
      ...post,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      title: editTitle,
      body: editBody,
    };
    const response = await api.put(`/posts/${post.id}`, updatedPost);
    if (response.status < 200 || response.status >= 300)
      throw new Error("data didn't Fetched, please refresh");
    navigate(`/posts/${post.id}`)
  };

  return (
    <div className="outlet">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">
          <h2>Post Title</h2>
        </label>
        <input
          type="text"
          id="title"
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />

        <label htmlFor="textarea">
          <h2>Post Body</h2>
        </label>
        <textarea
          id="textarea"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />

        <button type="submit" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditPost;
