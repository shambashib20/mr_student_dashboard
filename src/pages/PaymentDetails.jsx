
import '../styles/style.css';
import '../assets/js/jquery.min.js';
import '../assets/js/bootstrap.min.js';
import '../assets/js/owl.carousel.min.js';
import '../assets/js/custom.js';
import { Link } from 'react-router-dom';

const PaymentDetails = () => {
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
                    <li className="current-menu-item"><a href="paymemt-detail.html"><img src="./images/dashboard.png" alt="" /> <span>Payment Status</span></a></li>
                    <li><a href="idcard.html"><img src="./images/dashboard.png" alt="" /> <span>ID Card</span></a></li>
                    <li><a href="notice.html"><img src="./images/dashboard.png" alt="" /> <span>Notice</span></a></li>
                    <li><a href="certificate.html"><img src="./images/dashboard.png" alt="" /> <span>Certificates</span></a></li>
                </ul>
            </div>
            <div className="mainContent">
                <header className="dashHeader">
                    <div className="headerContainer">
                        <div className="headerLeft">
                            <div className="menuBtn">
                                <button type="button"><img src="images/interface.png" alt=""/></button>
                            </div>
                            <div className="pgHeading">
                                <h2>Payment Details</h2>
                            </div>
                        </div>
                        <div className="headerRight">
                            <div className="headerProfile">
                                <figure><img src="./images/profileimg.avif" alt=""/></figure>
                                <div className="name">
                                    <h4>John Doe</h4>
                                </div>
                            </div>
                            <div className="logoutbtn">
                                <button type="button"><img src="./images/logout.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="contentWrapper">
                    <div className="paymemtDetail">
                        <div className="tableWrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Admission Fees</th>
                                        <th>Booking</th>
                                        <th>1st Installment</th>
                                        <th>2nd Installment</th>
                                        <th>3rd Installment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Amount</td>
                                        <td>5000</td>
                                        <td>5000</td>
                                        <td>115000</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Due Date</td>
                                        <td>05-06-2025</td>
                                        <td>20-06-2025</td>
                                        <td>20-06-2025</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Received Date</td>
                                        <td>20-06-2025</td>
                                        <td>20-06-2025</td>
                                        <td>20-06-2025</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Bill No.</td>
                                        <td>MRHO-2025-718</td>
                                        <td>MRHO-2025-719</td>
                                        <td>MRHO-2025-720</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>Done</td>
                                        <td>Done</td>
                                        <td>Done</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tableWrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Semester Fees</th>
                                        <th>1st Semester Installment</th>
                                        <th>2nd Semester Installment</th>
                                        <th>3rd Semester Installment</th>
                                        <th>4th Semester Installment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Amount</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td> Due Date</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td> Received Date</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td> Bill No.</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails