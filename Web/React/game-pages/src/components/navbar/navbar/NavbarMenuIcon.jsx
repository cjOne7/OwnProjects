import React from 'react';

const NavbarMenuIcon = () => {
    const navbarId = 'navbar';
    const mainClassName = 'navbar-list-items';
    const showResponsiveNavItems = (e) => {
        e.preventDefault();
        const navbar = document.getElementById(navbarId);
        navbar.className = navbar.className === mainClassName ? `${mainClassName} responsive` : mainClassName;
    };
    return (
        <li className={'icon'}>
            <a className={'navbar-link'} onClick={e => showResponsiveNavItems(e)}>&#9776;</a>
        </li>
    );
};

export default NavbarMenuIcon;