import Sidebar from '../components/Sidebar';

const HomePage = () => {
    return (

        <div className="mainWrapper">
            <Sidebar />

            <div className="mainContent">
                <header className="dashHeader">
                    <div className="headerContainer">
                        <div className="headerLeft">
                            <div className="menuBtn">
                                <button type="button">
                                    <img src="/images/interface.png" alt="" />
                                </button>
                            </div>
                            <div className="pgHeading">
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                        <div className="headerRight">
                            <div className="headerProfile">
                                <figure>
                                    <img src="/images/profileimg.avif" alt="" />
                                </figure>
                                <div className="name">
                                    <h4>John Doe</h4>
                                </div>
                            </div>
                            <div className="logoutbtn">
                                <button type="button">
                                    <img src="/images/logout.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="contentWrapper">
                    <div className="studentDashboard">
                        <div className="row">
                            <div className="col-12">
                                <div className="uploadedPhoto">
                                    <img src="/images/profileimg.avif" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="form-group">
                                    <label>Student Name</label>
                                    <h3>John Doe</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="form-group">
                                    <label>Contact No</label>
                                    <h3>9999999999</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="form-group">
                                    <label>Student ID</label>
                                    <h3>456</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="form-group">
                                    <label>Address</label>
                                    <h3>10/17 lane</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="form-group">
                                    <label>College Name</label>
                                    <h3>MR Group Of College</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="form-group">
                                    <label>Session</label>
                                    <h3>2014 - 2017</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
