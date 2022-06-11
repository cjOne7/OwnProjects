import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const NavbarItem = ({path, linkText}) => {
    const navbarLinkClass = 'navbar-link';
    const navbarLinkElement = 'list-element';
    return (
        <div>
            {/*TODO add active navlink style */}
            <li className={navbarLinkElement}>
                <NavLink to={path} className={navbarLinkClass}>{linkText}</NavLink>
            </li>
        </div>
    );
};

NavbarItem.propTypes = {
    path: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
}
export default NavbarItem;