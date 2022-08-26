import {Link} from "react-router-dom";


const Footer = () => {

    return (<div>

            <footer className="site-footer ">

                <div className="footer-Block">
                    <div className="footerLogo">
                        <Link to="/"> <img src="assets/images/poste-logo.jpg" alt=""/></Link>
                    </div>

                    <div className="widget nav-widget">
                        <h4 className="widget-title">Support</h4>
                        <ul>
                            <li><a href="about">Privacy Policy</a></li>
                            <li><a href="faq">Faq &amp; Terms</a></li>
                            <li><a href="contact">Contact Us</a></li>
                        </ul>
                    </div>


                    <div className="widget contact-widget">
                        <h4 className="widget-title">Contact Us</h4>
                        <ul className="info-list">
                            <li>

                                <span className="icon"><i className="far fa-phone"></i></span>

                                <span className="info">

                                    <span className="info-title">Phone : </span><a href="#">+216 71 839 000</a></span>
                            </li>

                            <li>
                                <span className="icon"><i className="far fa-map-marker-alt"></i></span>

                                <span className="info"><span className="info-title">Location : </span><a href="#">Hedi Nouira street - 1030 Tunis, Tunisia</a></span>
                            </li>
                        </ul>
                    </div>
                </div>


                    <div className="copyright-area">

                            <p className="copyright-text">© 2000-2022 <span> </span><a href="#">La Poste Tunisienne</a>. All Rights Reserved</p>

                    </div>


            </footer>
        </div>
    )
}


export default Footer