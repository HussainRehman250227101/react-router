import { useState,useEffect } from "react";
import api from "../../api/api";
import { useLoaderData, useNavigate } from "react-router-dom";
import {format} from "date-fns"


const AddPost = () => {

const [newTitle, setNewTitle] = useState("");
const [newBody, setNewBody] = useState("");
const posts = useLoaderData();
const navigate = useNavigate();

const handleSubmit = async()=>{
    const id = posts.length ? posts[posts.length -1].id +1 :1
    const newPost = {id:id, title: newTitle, datetime: format(new Date(), 'MMMM dd, yyyy pp'),body:newBody}
    const response =await api.post('/posts',newPost);
    if(response.status < 200 || response.status >= 300 ) throw new Error("Post not saved, please refrest page and try again! ")
    setNewTitle('');
    setNewBody('')
    navigate('/')
    
  }

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
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <label htmlFor="textarea">
          <h2>Post Body</h2>
        </label>
        <textarea
          id="textarea"
          required
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
        />

        <button
        type="submit"
        onClick={()=> handleSubmit()}
        >Submit</button>
      </form>
    </div>
  );
};

export default AddPost;


export const allpostloader = async () => {
    const response = await api.get('/posts')
    if(response.status !== 200 ) throw new Error('data download from server failed, please reload page!')
    return response.data
}