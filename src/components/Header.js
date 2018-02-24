import React from 'react';

const Header = () => {
    return(
        <div>
            <nav className="white" role="navigation">
            <div className="nav-wrapper container light-blue darken-4">
                <a id="logo-container" href="#" className="brand-logo"></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#">Navbar</a></li>
                </ul>

                <ul id="nav-mobile" className="side-nav">
                    <li><a href="#">Navbar</a></li>
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        </nav>
        </div>
    );
};

export default Header;