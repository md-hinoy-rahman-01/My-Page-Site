import "./Navbar.css"
import { Link } from "react-router-dom"


function Navbar()
{
    return(

    <div className="navbar">
        <h3 className="nav-home"> <Link to="/">My-Page</Link></h3>
        <h3 className="nav-item"><Link to="/academics">Academics</Link></h3>
        <h3 className="nav-item"><Link to="/experience">Experience</Link></h3>
        <h3 className="nav-item"><Link to="/projects">Projects</Link></h3>
        <h3 className="nav-item"><Link to="/contact">Contact</Link></h3>
    
    </div>

    )
    
}

export default Navbar