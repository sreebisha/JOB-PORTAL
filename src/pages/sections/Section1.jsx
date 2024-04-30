import React from "react";
import "../../css/main.css";

const Section1 = () => {
    return (
        <div className="section1">
            <div className="intro">
                <div className="container">
                    <div className="intro-text">
                        <h1>
                            Looking for a job?
                            <br />
                            <span className="green">we will help you</span>
                        </h1>
                        <div className="check-out">
                            <p>Check out our offers</p>
                            <div className="form">
                                <div className="job-search">
                                    <img
                                        style={{
                                            width: "20px",
                                            marginRight: "30px",
                                        }}
                                        src="src/assets/img/icon/search-icon.svg"
                                        alt=""
                                    />
                                    <input
                                        type="text"
                                        placeholder="Type in your job search"
                                    />
                                </div>
                                <div className="location">
                                    <label htmlFor="location">location:</label>
                                    <select name="location" id="location">
                                        <option value="0">Wroclaw</option>
                                        <option value="1">Kraków</option>
                                        <option value="2">Warszawa</option>
                                        <option value="3">Gdańsk</option>
                                    </select>
                                    <input
                                        className="search main-btn"
                                        type="submit"
                                        value="Search"
                                    />
                                </div>
                            </div>
                            <div className="follow">
                                <span>Follow Us</span>
                                <a href="">
                                    <img
                                        src="src/assets/img/icon/facebook-icon.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src="src/assets/img/icon/twitter-icon.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src="src/assets/img/icon/linkedin-icon.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="intro-img">
                        <img src="src/assets/img/intro.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
