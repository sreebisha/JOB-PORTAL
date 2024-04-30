import React from "react";

const Section5 = () => {
    return (
        <div>
            <div class="container">
                {" "}
                <div class="update-news">
                    <div class="row">
                        <div class="col-md-5 news-text">
                            <h2>Get your update news</h2>
                            <p>
                                If you going to use a passage of Lotem Ipsum,
                                you need to be sure there isn’t anything
                                embarrassing.
                            </p>
                        </div>
                        <div class="col-md-7 news-form">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                id=""
                            />
                            <button type="submit">Send</button>
                        </div>
                    </div>
                </div>
                <div class="find-jobs text-center">
                    <h1>
                        <span class="green">Find jobs</span> around
                        <br />
                        the world
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Section5;
