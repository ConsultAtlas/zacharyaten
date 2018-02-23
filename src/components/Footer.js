import React from 'react';

const Footer = () => {
    return(
        <div>
            <footer className="page-footer deep-purple">
            <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Contact Info</h5>
                    <p className="grey-text text-lighten-4">I can be contacted via the following:</p>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text"></h5>
                    <ul>
                        <li><a className="white-text" href="#!"></a></li>
                        
                    </ul>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text">GitHub</h5>
                    <ul>
                        <li><a className="white-text" href="https://github.com/ConsultAtlas/Krypto-Dash">Krypto-Dash Github</a></li>
                        
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