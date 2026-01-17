import api from "../../api/api"
import { useLoaderData } from "react-router-dom";
import { useParams } from 'react-router-dom'


const Post = () => {
    const {id} =useParams();
    const posts = useLoaderData();
    const post = posts.find(post => post.id == id.toString())
  return (
    <div>
      <h1 style={{margin:'20px'}}>{post.title}</h1>
      <p style={{margin:'10px 20px'}}>{post.datetime}</p>
      <p style={{margin:'10px 20px'}}>{post.body}</p>
    </div>
  )
}

export default Post


export const singlepostLoader = async()=> {
  
  const response  = await api.get('/')
  if (!response.status == 200 ) throw new Error("data didn't Fetched, please refresh")
  return response.data
}