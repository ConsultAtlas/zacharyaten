import React from 'react';

const Footer = () => {
    return(
        <div className="container">
            <footer className="page-footer light-blue darken-4">
            <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Contact Info</h5>
                    <ul>
                        <li><a className="white-text" href="https://github.com/ConsultAtlas">GitHub</a></li>
                        <li><a className="white-text" href="https://www.linkedin.com/in/zacharyaten/">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text"></h5>
                    <ul>
                        <li><a className="white-text" href="#!"></a></li>
                        
                    </ul>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text">Copyright</h5>
                        <ul>
                            <li>Zachary Aten 2018.</li>
                            <li>All Rights Reserved.</li>
                        </ul>
                </div>
            </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                Made with <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;