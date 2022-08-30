import {Link} from "react-router-dom"

const NavbarMenu=()=>{
    return(
        <div className="nav-menu NavbarMenu">
            <ul>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/Dashboard">Admin Interface</Link></li>
                <li><Link to="/">Logout</Link></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
    )
}

export default NavbarMenu;