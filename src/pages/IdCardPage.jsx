import Sidebar from "../components/Sidebar";



const IdCardPage = () => {
    return (
        <div className="mainWrapper">
            <Sidebar />
            <div className="mainContent">
                <header className="dashHeader">
                    <div className="headerContainer">
                        <div className="headerLeft">
                            <div className="menuBtn">
                                <button type="button"><img src="images/interface.png" alt="" /></button>
                            </div>
                            <div className="pgHeading">
                                <h2>Payment Details</h2>
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
                    <div className="row studentIdWrapper">
                        <div className="col-md-5">
                            <div className="student_id">
                                <div className="top_section">
                                    <div className="profile_photo">
                                        <img src="./images/profileimg.avif" alt="Profile Photo" />
                                    </div>
                                    <div className="student_name">
                                        <ul className="student_info">
                                            <li className="name">John Doe</li>
                                            <li className="age"><span className="bold">Age: 20</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bottom_section">
                                    <div className="student_details">
                                        <ul>
                                            <li><span className="bold">ID:</span> 525710</li>
                                            <li><span className="bold">Course:</span> Full Stack Software Development</li>
                                            <li><span className="bold">Class:</span> Bootcamp</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default IdCardPage
