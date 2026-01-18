import api from "../../api/api";
import { useLoaderData, useNavigate } from "react-router-dom";
import Error from "./Error";


const Post = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  if (!post) {
    <Error />;
  }
  const handleDelete = async (id) => {
    const res = await api.delete(`posts/${post.id}`);
    if (res.status < 200 || res.status >= 300)
      throw new Error("post didn't deleted, please refresh page and try again");
    navigate('/')
  };

  const handleUpdate =()=> {
    navigate(`/posts/${post.id}/edit`)
  }

  return (
    <div>
      <h1 style={{ margin: "20px" }}>{post.title}</h1>
      <p style={{ margin: "10px 20px" }}>{post.datetime}</p>
      <p style={{ margin: "10px 20px" }}>{post.body}</p>
      <button onClick={() => handleDelete(post.id)} className="delete-btn">
        delete
      </button>
      <button onClick={()=> handleUpdate()} className="delete-btn">
        Update
      </button>
    </div>
  );
};

export default Post;

export const singlepostLoader = async ({ params }) => {
  const response = await api.get(`posts/${params.id}`);
  if (response.status < 200 || response.status >= 300)
    throw new Error("data didn't Fetched, please refresh");
  return response.data;
};
