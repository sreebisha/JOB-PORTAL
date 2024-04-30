import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-xl fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img
                            claass="w-100"
                            src="src/assets/img/icon/company-logo.svg"
                            alt=""
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-card-item">
                                <a
                                    className="nav-link  active"
                                    href="index.html"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-card-item">
                                <a className="nav-link" href="aboutus.html">
                                    About
                                </a>
                            </li>
                            <li className="nav-card-item">
                                <a className="nav-link" href="contact.html">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-card-item">
                                <a className="nav-link" href="blog.html">
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <ul className="right navbar-nav ms-auto">
                            <li className="nav-card-item-right">
                                <a className="nav-link" href="#">
                                    Sign in
                                </a>
                            </li>
                            <li className="nav-card-item-right create-account">
                                <a className="nav-link" href="#">
                                    Create account
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
