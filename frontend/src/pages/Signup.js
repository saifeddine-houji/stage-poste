import Header from "../blocks/Home/Header";
import Footer from "../blocks/Home/Footer";
import {Link} from "react-router-dom";
import React from "react";

const Signup =()=>{
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
                                                <h4 className="mt-1 mb-5 pb-1">Create an account </h4>
                                            </div>
                                        </div>

                                        <form>
                                            <p>Please fill in this form</p>


                                            <div className="formUnit">
                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">First name</label>
                                                    <input  type="text" id="form2Example11" className="form-control"
                                                            placeholder="First name"/>
                                                </div>

                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Last name</label>
                                                    <input  type="text" id="form2Example11" className="form-control"
                                                            placeholder="Last name"/>
                                                </div>
                                            </div>


                                            <div className="formUnit">
                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Username (how your account will show)</label>
                                                    <input  type="text" id="form2Example11" className="form-control"
                                                            placeholder="User name"/>
                                                </div>

                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Email</label>
                                                    <input  type="text" id="form2Example11" className="form-control"
                                                            placeholder="Email"/>
                                                </div>
                                            </div>


                                            <div className="formUnit">
                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Password</label>
                                                    <input  type="text" id="form2Example11" className="form-control"
                                                            placeholder="******"/>
                                                </div>

                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Confirm password</label>
                                                    <input  type="text" id="form2Example11" className="form-control"
                                                            placeholder="******"/>
                                                </div>
                                            </div>

                                            <div className="formUnit">
                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">State</label>
                                                    <select className="form-select">
                                                        <option value="Ariana">Ariana</option>
                                                        <option value="Beja">Beja</option>
                                                        <option value="Ben Arous">Ben Arous</option>
                                                        <option value="Bizerte">Bizerte</option>
                                                        <option value="Gabès">Gabès</option>
                                                        <option value="Gafsa">Gafsa</option>
                                                        <option value="Jendouba">Jendouba</option>
                                                        <option value="Kairouan">Kairouan</option>
                                                        <option value="Kasserine">Kasserine</option>
                                                        <option value="Kebili">Kebili</option>
                                                        <option value="Le Kef">Le Kef</option>
                                                        <option value="Mahdia">Mahdia</option>
                                                        <option value="La Manouba">La Manouba</option>
                                                        <option value="Medenine">Medenine</option>
                                                        <option value="Monastir">Monastir</option>
                                                        <option value="Nabeul">Nabeul</option>
                                                        <option value="Sfax">Sfax</option>
                                                        <option value="Sidi Bouzid">Sidi Bouzid</option>
                                                        <option value="Siliana">Siliana</option>
                                                        <option value="Sousse">Sousse</option>
                                                        <option value="Tataouine">Tataouine</option>
                                                        <option value="Tozeur">Tozeur</option>
                                                        <option value="Tunis">Tunis</option>
                                                        <option value="Zaghouan">Zaghouan</option>
                                                    </select>
                                                </div>

                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Phone number</label>
                                                    <input  type="text" id="form2Example11" className="form-control"
                                                            placeholder="123456789"/>
                                                </div>
                                            </div>


                                            <div className="formUnit">
                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Gender</label>
                                                    <select className="form-select">
                                                        <option value="male">male</option>
                                                        <option value="female">female</option>
                                                    </select>
                                                </div>

                                                <div className="form-outline col-5 mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Profile photo</label>
                                                    <input  type="file" id="form2Example11" className="form-control"
                                                            />
                                                </div>
                                            </div>


                                            <div className="d-flex justify-content-around pt-1 mb-5 pb-1">
                                                <button
                                                    className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                                                    type="submit">Create account
                                                </button>

                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <div>
                                                    <Link to="/login" className="btn btn-outline-success">You have an account? Log in here</Link>
                                                </div>

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

export default Signup;