import React,{useEffect} from "react";
import {Link,Navigate} from "react-router-dom"
import {logout} from "../../redux/actions/AuthenticationActions";
import {useDispatch,useSelector} from "react-redux";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const NavbarMenu=()=>{

    const dispatch = useDispatch();
    const dataUser = JSON.parse(localStorage.getItem('user'))
    const Auth = useSelector(state=>state.Auth)

    const logoutHandler = () =>{
        dispatch(logout())
    }
console.log(Auth)

    return(
        <div className="nav-menu NavbarMenu">
            <ul>
                {!JSON.parse(localStorage.getItem('user')) && <li><Link to="/Login">Login</Link></li>}
                {!JSON.parse(localStorage.getItem('user')) && <li><Link to="/Signup">Signup</Link></li>}
                {JSON.parse(localStorage.getItem('user'))?.role === 'ADMIN' && <li><Link to="/Dashboard">Admin Interface</Link></li>}

                <li><a href="#">About Us</a></li>
                {JSON.parse(localStorage.getItem('user')) && <li><Link to="/" onClick={logoutHandler}><PowerSettingsNewIcon/> Logout</Link></li>}
                {JSON.parse(localStorage.getItem('user')) && <li className="navbar-brand text-danger">{dataUser?.userName} <img src={dataUser?.img} alt="user image" className="rounded-circle" width="50"/></li>}
            </ul>
        </div>
    )
}

export default NavbarMenu;