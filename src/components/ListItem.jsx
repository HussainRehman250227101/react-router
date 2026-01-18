import { Link } from "react-router-dom"

const ListItem = ({post}) => {
  
  return (
    <Link to={`posts/${post.id}`} className='list-item'>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
        <p className="para">{(post.body).length > 200 ? `${post.body.slice(0,200)}...` : post.body}</p>
    </Link>
  )
}

export default ListItem
