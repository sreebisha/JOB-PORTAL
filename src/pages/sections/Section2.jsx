import React from "react";

const Section2 = () => {
    return (
        <div className="container">
            <div className="search-by">
                <h1>
                    Search by <span className="green">category</span>
                </h1>
                <a href="">
                    All category
                    <img
                        style={{ width: "20px", marginLeft: "20px" }}
                        src="src/assets/img/icon/arrow-right-icon.svg"
                        alt=""
                    />
                </a>

                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="false"
                >
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                            <div className="card-item">
                                <div className="photo">
                                    <img
                                        className="main-state"
                                        src="src/assets/img/icon/business-development.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover"
                                        src="src/assets/img/icon/business-development-hover.svg"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Business
                                    <br />
                                    Development
                                </p>
                            </div>

                            <div className="card-item">
                                <div className="photo">
                                    <img
                                        className="main-state"
                                        src="src/assets/img/icon/graphic.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover"
                                        src="src/assets/img/icon/graphic-hover.svg"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Graphic
                                    <br />
                                    Designer
                                </p>
                            </div>

                            <div className="card-item">
                                <div className="photo">
                                    <img
                                        className="main-state"
                                        src="src/assets/img/icon/pm.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover"
                                        src="src/assets/img/icon/pm-hover.svg"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Project
                                    <br />
                                    Management
                                </p>
                            </div>

                            <div className="card-item">
                                <div className="photo">
                                    <img
                                        className="main-state"
                                        src="src/assets/img/icon/marketing.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover"
                                        src="src/assets/img/icon/marketing-active.svg"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Marketing &<br />
                                    Communication
                                </p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="card-item">
                                <div className="photo">
                                    <img
                                        className="main-state"
                                        src="src/assets/img/icon/business-development.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover"
                                        src="src/assets/img/icon/business-development-hover.svg"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Another
                                    <br />
                                    Category
                                </p>
                            </div>

                            <div className="card-item">
                                <div className="photo">
                                    <img
                                        className="main-state"
                                        src="src/assets/img/icon/business-development.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover"
                                        src="src/assets/img/icon/business-development-hover.svg"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Another
                                    <br />
                                    Category
                                </p>
                            </div>

                            <div className="card-item">
                                <div className="photo">
                                    <img
                                        className="main-state"
                                        src="src/assets/img/icon/business-development.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover"
                                        src="src/assets/img/icon/business-development-hover.svg"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Another
                                    <br />
                                    Category
                                </p>
                            </div>

                            <div className="card-item">
                                <div className="photo">
                                    <img
                                        className="main-state"
                                        src="src/assets/img/icon/business-development.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover"
                                        src="src/assets/img/icon/business-development-hover.svg"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Another
                                    <br />
                                    Category
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-nav">
                        <a
                            className="nav-item"
                            role="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <img
                                src="src/assets/img/icon/prew-arrow.svg"
                                alt=""
                            />
                        </a>
                        <a
                            className="nav-item"
                            role="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <img
                                src="src/assets/img/icon/next-arrow.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
