import Header from "../blocks/Home/Header";
import Footer from "../blocks/Home/Footer";
import {Link} from "react-router-dom";


const Login =()=>{
    return(
        <div>
            <Header/>

                <div className="container mt-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">

                                        <div className="card-body p-md-5 mx-md-4">


                                            <div className="LogoTitle">
                                                <div className='site-logo'>
                                                    <img src="assets/images/poste-logo.jpg" alt="logo" className="imgLogin"/>
                                                </div>

                                                <div className="homepage-titles">
                                                    <h4 className="mt-1 mb-5 pb-1">Login to your account </h4>
                                                </div>
                                            </div>

                                            <form>
                                                <p>Please login to your account</p>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                           placeholder="email address"  />
                                                    <label className="form-label" htmlFor="form2Example11">Email</label>
                                                </div>


                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22"
                                                           className="form-control"  />
                                                    <label className="form-label"
                                                           htmlFor="form2Example22">Password</label>
                                                </div>


                                                <div className="d-flex justify-content-around pt-1 mb-5 pb-1">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                                                        type="submit">Log in
                                                    </button>
                                                    {/* {AuthState.error.data?.error} */}

                                                    <a className="text-muted" href="#"><Link to="/forgotPassword">Forgot
                                                        password ?</Link></a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <Link to='/Signup' className="btn btn-outline-success">Create
                                                        new</Link>
                                                </div>

                                            </form>

                                        </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Login;