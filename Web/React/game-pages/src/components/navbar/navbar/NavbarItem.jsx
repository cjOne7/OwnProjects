import React from 'react';
import {NavLink} from "react-router-dom";

const navbarLinkClass = 'navbar-link';
const navbarLinkElement = 'list-element';

const NavbarItem = ({path, linkText}) => {
    return (
        <div>
            {/*TODO add active navlink style */}
            <li className={navbarLinkElement}>
                <NavLink to={path} className={navbarLinkClass}>{linkText}</NavLink>
            </li>
        </div>
    );
};

export default NavbarItem;