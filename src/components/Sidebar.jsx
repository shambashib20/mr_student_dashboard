import { Link, useLocation } from "react-router-dom";



const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <div className="sidebar">
            <div className="sideBarLogo">
                <Link to="/">
                    <img src="/images/logo.png" alt="" />
                    <img src="/images/smlogo.png" alt="" className="smlogo" />
                </Link>
            </div>
            <ul className="menu">
                <li className={isActive("/") ? "current-menu-item" : ""}>
                    <Link to="/">
                        <img src="/images/dashboard.png" alt="" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className={isActive("/payment-details") ? "current-menu-item" : ""}>
                    <Link to="/payment-details">
                        <img src="/images/dashboard.png" alt="" />
                        <span>Payment Status</span>
                    </Link>
                </li>
                <li className={isActive("/id-card") ? "current-menu-item" : ""}>
                    <Link to="/id-card">
                        <img src="/images/dashboard.png" alt="" />
                        <span>ID Card</span>
                    </Link>
                </li>
                <li className={isActive("/notices") ? "current-menu-item" : ""}>
                    <Link to="/notices">
                        <img src="/images/dashboard.png" alt="" />
                        <span>Notice</span>
                    </Link>
                </li>
                <li className={isActive("/certificate") ? "current-menu-item" : ""}>
                    <Link to="/certificate">
                        <img src="/images/dashboard.png" alt="" />
                        <span>Certificates</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar