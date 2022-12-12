import "./Navigation.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navigation = ({ current, changeUser }) => {
    const checkpoint = () => {
        console.log("NAV currentUser", current);
    };
    useEffect(checkpoint, [current]);
    const logout = () => {
        fetch("/logout")
            .then((res) => res.json())
            .then((ret) => {
                if (ret.isLoggedOut) {
                    console.log("logout successfully");
                    changeUser(undefined);
                } else {
                    console.log("logout fail");
                }
            });
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand logo nav-link">
                        E-connect
                    </Link>
                    <button
                        id="extend-navigation"
                        aria-label="extend-navigation"
                        className="navbar-toggler button-onboard"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        type="button"
                        aria-controls="navbarText"
                        aria-expanded="false"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse submenu"
                        id="navbarText"
                    >
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link to="/search" className="nav-link">
                                    Search
                                    <img
                                        className="search-icon"
                                        src="images/search-icon.png"
                                        alt="search-icon"
                                    />
                                </Link>
                            </li>
                            {current !== undefined ? (
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        className="nav-link"
                                        onClick={logout}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            )}
                            {current === undefined ? (
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">
                                        Signup
                                    </Link>
                                </li>
                            ) : (
                                ""
                            )}

                            {current !== undefined ? (
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">
                                        Profile
                                    </Link>
                                </li>
                            ) : (
                                ""
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
Navigation.propTypes = {};
export default Navigation;
