import React from "react";
import "../../css/main.css";

const Section3 = () => {
    return (
        <div class="container">
            <div className="job-offers">
                <h1>
                    Job <span className="green">offers</span>
                </h1>
                <a href="">
                    All offers{" "}
                    <img
                        style={{ width: "20px", marginLeft: "20px" }}
                        src="src/assets/img/icon/arrow-right-icon.svg"
                        alt=""
                    />
                </a>
                <div className="row pt-5">
                    <div className="image col-md-4">
                        <img src="src/assets/img/job-offers.png" alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="offert-wrapper">
                            <div className="offert">
                                <div>
                                    <div className="offert-description">
                                        <div className="company-logo">
                                            <img
                                                src="src/assets/img/icon/go-icon.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="description">
                                            <p className="company-name">
                                                Go! SM
                                            </p>
                                            <p className="description">
                                                It has survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="offert-meta">
                                        <p className="location">
                                            location:{" "}
                                            <span className="city">
                                                Stuttgart
                                            </span>
                                        </p>
                                        <p className="offert-counter">
                                            Jobs:{" "}
                                            <span className="green">
                                                <strong>3</strong>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="main-btn">
                                See details
                            </a>
                        </div>
                        <div className="offert-wrapper">
                            <div className="offert">
                                <div>
                                    <div className="offert-description">
                                        <div className="company-logo">
                                            <img
                                                src="src/assets/img/icon/create-paper-icon.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="description">
                                            <p className="company-name">
                                                Create Paper
                                            </p>
                                            <p className="description">
                                                It has survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="offert-meta">
                                        <p className="location">
                                            location:{" "}
                                            <span className="city">Pekin</span>
                                        </p>
                                        <p className="offert-counter">
                                            Jobs:{" "}
                                            <span className="green">
                                                <strong>5</strong>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="main-btn">
                                See details
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="offert-wrapper">
                            <div className="offert">
                                <div>
                                    <div className="offert-description">
                                        <div className="company-logo">
                                            <img
                                                src="src/assets/img/icon/social-road-icon.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="description">
                                            <p className="company-name">
                                                Social Road
                                            </p>
                                            <p className="description">
                                                It has survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="offert-meta">
                                        <p className="location">
                                            location:{" "}
                                            <span className="city">
                                                San Francisco
                                            </span>
                                        </p>
                                        <p className="offert-counter">
                                            Jobs:{" "}
                                            <span className="green">
                                                <strong>2</strong>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="main-btn">
                                See details
                            </a>
                        </div>
                        <div className="offert-wrapper">
                            <div className="offert">
                                <div>
                                    <div className="offert-description">
                                        <div className="company-logo">
                                            <img
                                                src="src/assets/img/icon/point-design-icon.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="description">
                                            <p className="company-name">
                                                Point Design
                                            </p>
                                            <p className="description">
                                                It has survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="offert-meta">
                                        <p className="location">
                                            location:{" "}
                                            <span className="city">Tempe</span>
                                        </p>
                                        <p className="offert-counter">
                                            Jobs:{" "}
                                            <span className="green">
                                                <strong>8</strong>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="main-btn">
                                See details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
