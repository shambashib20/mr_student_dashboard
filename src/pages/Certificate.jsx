import Sidebar from "../components/Sidebar";

const Certificate = () => {
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
                                <h2>Certificate</h2>
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
                                        <h4>Certificate 1</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="item">
                                    <a href="./images/dummy.pdf">
                                        <figure> <img src="./images/pdf.png" alt="" /></figure>
                                        <h4>Certificate 2</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="item">
                                    <a href="./images/dummy.pdf">
                                        <figure> <img src="./images/pdf.png" alt="" /></figure>
                                        <h4>Certificate 3</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="item">
                                    <a href="./images/dummy.pdf">
                                        <figure> <img src="./images/pdf.png" alt="" /></figure>
                                        <h4>Certificate 4</h4>
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

export default Certificate