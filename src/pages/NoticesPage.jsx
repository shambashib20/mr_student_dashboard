import '../styles/style.css';
import '../assets/js/jquery.min.js';
import '../assets/js/bootstrap.min.js';
import '../assets/js/owl.carousel.min.js';
import '../assets/js/custom.js';
import { Link } from 'react-router-dom';

const NoticesPage = () => {
    return (
        <div className="mainWrapper">
            <div className="sidebar">
                <div className="sideBarLogo">
                    <Link to="/">
                        <img src="./images/logo.png" alt="" />
                        <img src="./images/smlogo.png" alt="" className="smlogo" />
                    </Link>

                </div>
                <ul className="menu">
                    <li> <a href="index.html"><img src="./images/dashboard.png" alt="" /> <span>Dashboard</span> </a></li>
                    <li><a href="paymemt-detail.html"><img src="./images/dashboard.png" alt="" /> <span>Payment Status</span></a></li>
                    <li><a href="idcard.html"><img src="./images/dashboard.png" alt="" /> <span>ID Card</span></a></li>
                    <li className="current-menu-item"><a href="notice.html"><img src="./images/dashboard.png" alt="" /> <span>Notice</span></a></li>
                    <li><a href="certificate.html"><img src="./images/dashboard.png" alt="" /> <span>Certificates</span></a></li>
                </ul>
            </div>
            <div className="mainContent">
                <header className="dashHeader">
                    <div className="headerContainer">
                        <div className="headerLeft">
                            <div className="menuBtn">
                                <button type="button"><img src="images/interface.png" alt="" /></button>
                            </div>
                            <div className="pgHeading">
                                <h2>Notice</h2>
                            </div>
                        </div>
                        <div className="headerRight">
                            <div className="headerProfile">
                                <figure><img src="./images/profileimg.avif" alt="" /></figure>
                                <div className="name">
                                    <h4>John Doe</h4>
                                </div>
                            </div>
                            <div className="logoutbtn">
                                <button type="button"><img src="./images/logout.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="contentWrapper">
                    <div className="noticePg">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="item">
                                    <a href="./images/dummy.pdf">
                                        <figure> <img src="./images/pdf.png" alt="" /></figure>
                                        <h4>Notice 1</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="item">
                                    <a href="./images/dummy.pdf">
                                        <figure> <img src="./images/pdf.png" alt="" /></figure>
                                        <h4>Notice 2</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="item">
                                    <a href="./images/dummy.pdf">
                                        <figure> <img src="./images/pdf.png" alt="" /></figure>
                                        <h4>Notice 3</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="item">
                                    <a href="./images/dummy.pdf">
                                        <figure> <img src="./images/pdf.png" alt="" /></figure>
                                        <h4>Notice 4</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticesPage