import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <nav>
            <div className='nav-links'>
                <Link style={{ textDecoration: 'none' }} to="/" >
                    <h4>Home</h4>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/skills">
                    <h4>Skills</h4>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/about">
                    <h4>About</h4>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/contact">
                    <h4>Contact</h4>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;