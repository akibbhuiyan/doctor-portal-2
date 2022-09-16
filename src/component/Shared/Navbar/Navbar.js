import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/' class="nav-link me-5 mr-5 active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link me-5 mr-5" href="#">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/doctor/dashboard' class="nav-link me-5 mr-5" href="#">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link me-5 mr-5 text-white" href="#">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link me-5 mr-5 text-white" href="#">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link me-5 mr-5 text-white" href="#">Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;