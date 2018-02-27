import React from 'react';

const AboutMe = () => {
    return(
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons medium ">person</i></h2>
                            <h5 className="center">About Me</h5>

                            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons medium">group</i></h2>
                            <h5 className="center">User Experience Focused</h5>

                            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons medium">settings</i></h2>
                            <h5 className="center">Current Jobs</h5>

                            <ul class="collapsible" data-collapsible="accordion">
                                <li>
                                    <div class="collapsible-header"><i class="material-icons">filter_drama</i>Startup</div>
                                    <div class="collapsible-body"><span>Grassroots Labs</span></div>
                                </li>
                                <li>
                                    <div class="collapsible-header"><i class="material-icons">place</i>Consulting</div>
                                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

    );
};

export default AboutMe;