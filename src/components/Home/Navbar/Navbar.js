import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <p className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mr-5" href="#">About</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mr-5" href="#">Dental Services</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mr-5 text-white" href="#">Reviews</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mr-5 text-white" href="#">Blogs</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mr-5 text-white" href="#">Contact Us</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;