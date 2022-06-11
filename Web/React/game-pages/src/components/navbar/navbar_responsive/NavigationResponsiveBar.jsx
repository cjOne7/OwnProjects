import React from 'react';
import './navbar_responsive.css';

const NavigationResponsiveBar = () => {
    const navbarId = 'navbar';
    const showResponsiveNavItems = () => {
        const navbar = document.getElementById(navbarId);
        console.log(navbar.className)
        if (navbar.className === 'topnav') {
            navbar.className += ' responsive';
        } else {
            navbar.className = 'topnav';
        }
    };
    return (
        <div>
            <ul className={'topnav'} id={navbarId}>
                <li><a href="#home">Home</a></li>
                <li><a href="">MMORPG</a></li>
                <li><a href="">Shooters</a></li>
                <li><a href="">Hack&Slash</a></li>
                <li><a href="">Contact us</a></li>
                <li className={'icon'}>
                    <a className={'burger-icon'} href="javascript:void(0)"
                       onClick={() => showResponsiveNavItems()}>&#9776;</a>
                </li>
            </ul>
        </div>
    );
};

export default NavigationResponsiveBar;