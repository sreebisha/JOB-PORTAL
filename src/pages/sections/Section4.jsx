import React from "react";

const Section4 = () => {
    return (
        <div>
            <div class="container">
                {" "}
                <div class="service text-center">
                    <h1>
                        Top Notch <span class="green">Service</span>
                    </h1>
                    <div class="service-items">
                        <div class="item">
                            <img src="src/assets/img/icon/cv-icon.svg" alt="" />
                            <span class="counter">2 331</span>
                            <span>Job offers</span>
                        </div>
                        <div class="item">
                            <img
                                src="src/assets/img/icon/customers.svg"
                                alt=""
                            />
                            <span class="counter">1 148</span>
                            <span>Satisfied customers</span>
                        </div>
                        <div class="item">
                            <img
                                src="src/assets/img/icon/applications.svg"
                                alt=""
                            />
                            <span class="counter">5 364</span>
                            <span>Applications sent</span>
                        </div>
                        <div class="item">
                            <img
                                src="src/assets/img/icon/projects.svg"
                                alt=""
                            />
                            <span class="counter">1 764</span>
                            <span>Realized projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
