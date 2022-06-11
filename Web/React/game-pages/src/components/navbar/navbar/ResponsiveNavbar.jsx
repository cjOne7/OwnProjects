import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {routes} from "../../../routes";
import './navbar.css';

const navbarLinkClass = 'navbar-link';
const navbarLinkElement = 'list-element';

const ResponsiveNavbar = () => {
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
        </div>
    );
};

export default ResponsiveNavbar;