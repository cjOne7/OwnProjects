import React from 'react';
import './navigation_responsive1.css';
import {Link, NavLink, Outlet} from "react-router-dom";
import {routes} from '../../../routes';

const navbarLinkClass = 'navbar-link';
const navbarLinkElement = 'list-element';

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
                    <Link to={'/'} className={'list-header'}>Home</Link>
                    <div>
                        <li className={navbarLinkElement}>
                            <NavLink to={routes.mmorpg} className={navbarLinkClass}>MMORPG</NavLink>
                        </li>
                    </div>
                    <div>
                        <li className={navbarLinkElement}>
                            <NavLink to={routes.shooters} className={navbarLinkClass}>Shooters</NavLink>
                        </li>
                    </div>
                    <div>
                        <li className={navbarLinkElement}>
                            <NavLink to={routes.hack_and_slash} className={navbarLinkClass}>Hack&Slash</NavLink>
                        </li>
                    </div>
                    <div>
                        <li className={navbarLinkElement}>
                            <NavLink to={routes.contact_form} className={navbarLinkClass}>Contact form</NavLink>
                        </li>
                    </div>
                    <li className={'icon'}>
                        <a href="javascript:void(0)" className={navbarLinkClass}
                           onClick={() => showResponsiveNavItems()}>&#9776;</a>
                    </li>
                </ul>
            </nav>

            <Outlet/>

            <footer>Footer</footer>
        </div>
    );
};

export default NavigationResponsiveBar1;