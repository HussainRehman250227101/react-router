import { useLoaderData } from "react-router-dom";
import api from "../../api/api"
import ListItem from '../components/ListItem'

const Home = () => {

  const posts = useLoaderData()

  return (
    <div className='outlet'>
        <ul>
          {posts.map(post => (
            <ListItem key={post.id} post={post}/>
          ))}
        </ul>
    </div>
  )
}

export default Home;

export const postLoader = async()=> {
  
  const response  = await api.get('/')
  if (!response.status == 200 ) throw new Error("data didn't Fetched, please refresh")
  return response.data
}
