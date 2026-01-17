import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <img src="logo.png" alt="" width="90px" />
        <ul>
            <NavLink to="/"><li className="navlink">Home</li></NavLink>
            <NavLink to="addPost"><li className="navlink">Add post</li></NavLink>
            <NavLink to="about"><li className="navlink">About</li></NavLink>
        </ul>        
    </nav>
  )
}

export default Navbar
