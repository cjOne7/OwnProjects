import React from 'react';
import './navigation_responsive1.css';
import {Link, NavLink, Outlet} from "react-router-dom";

const NavigationResponsiveBar1 = () => {
    const navbarId = 'navbar';
    const className = 'navbar-list-items';
    const showResponsiveNavItems = () => {
        const navbar = document.getElementById(navbarId);
        if (navbar.className === className) {
            navbar.className += ' responsive';
        } else {
            navbar.className = className;
        }
    };
    return (
        <div>
            <nav role={"navigation"} className={'navbar-container'}>
                <ul className={className} id={'navbar'}>
                    {/*<a href="#home" className={'list-header'}>Home</a>*/}
                    <Link to={'/'} className={'list-header'}>Home</Link>
                    <div>
                        <li className={'list-element'}>
                            <a href="#mmorpg" className={'navbar-link'}>MMORPG</a>
                        </li>
                    </div>
                    <div>
                        <li className={'list-element'}>
                            <a href="#shooters" className={'navbar-link'}>Shooters</a>
                        </li>
                    </div>
                    <div>
                        <li className={'list-element'}>
                            <a href="#hack&slash" className={'navbar-link'}>Hach&Slash</a>
                        </li>
                    </div>
                    <div>
                        <li className={'list-element'}>
                            <a href="#contact" className={'navbar-link'}>Contact us</a>
                        </li>
                    </div>
                    <li className={'icon'}>
                        <a href="javascript:void(0)" className={'navbar-link'}
                           onClick={() => showResponsiveNavItems()}>&#9776;</a>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </div>
    );
};

export default NavigationResponsiveBar1;