import React from 'react';
import './navigation_responsive1.css';

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
                    <li className={'list-header'}>
                        <a href="#home" className={'navbar-link'}>Home</a>
                    </li>
                    <li className={'list-element'}>
                        <a href="#mmorpg" className={'navbar-link'}>MMORPG</a>
                    </li>
                    <li className={'list-element'}>
                        <a href="#shooters" className={'navbar-link'}>Shooters</a>
                    </li>
                    <li className={'list-element'}>
                        <a href="#hack&slash" className={'navbar-link'}>Hach&Slash</a>
                    </li>
                    <li className={'list-element'}>
                        <a href="#contact" className={'navbar-link'}>Contact us</a>
                    </li>
                    <li className={'icon'}>
                        <a href="javascript:void(0)" className={'navbar-link'}
                           onClick={() => showResponsiveNavItems()}>&#9776;</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationResponsiveBar1;