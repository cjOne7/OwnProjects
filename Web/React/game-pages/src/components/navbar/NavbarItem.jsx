import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const NavbarItem = ({path, linkText}) => {
    return (
        <div>
            <li className={'list-element'}>
                <NavLink to={path} className={'navbar-link'}>{linkText}</NavLink>
            </li>
        </div>
    );
};

NavbarItem.propTypes = {
    path: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
}
export default NavbarItem;