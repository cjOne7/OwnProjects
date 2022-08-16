import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper" style={{padding: '0 20px'}}>
                    <NavLink to="/" className="brand-logo">React.js + TS</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/todos">ToDo's</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact_form">Contact form</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    );
};

export default Navbar;