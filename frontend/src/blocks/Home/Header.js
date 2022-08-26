import {Link} from "react-router-dom"
import NavbarMenu from "../../components/Home/NavbarMenu";
import SignUp from "../../components/Home/SignupButton";

const Header =()=>{
    return(
        <div className="header-wrapper">
            <header className="mx-5">
                <div className="navbar-wrapper">
                    <div className="container">
                        <div className="navbar navbar-light">
                            <div className="site-logo">
                                <Link to="/"> <img src="assets/images/poste-logo.jpg" alt=""/> </Link>
                            </div>

                                <NavbarMenu/>

                        </div>
                    </div>
                </div>

            </header>
        </div>

    )
}

export default Header;