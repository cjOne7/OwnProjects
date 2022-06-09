import React from 'react';
import './navbar.css';

const NavigationBar = () => {
    return (
        <nav className={'navbar-container'} role={"navigation"}>
            <ul className={'navbar-list-items'}>
                {/*<div className={'navbar-header'}>*/}
                {/*    <li className={'list-element'}>*/}
                {/*        <a className={'navbar-link'} href="#home">Home</a>*/}
                {/*    </li>*/}
                {/*</div>*/}
                <a href="#home" className={'navbar-header'}>Home</a>
                <div>
                    <li className={'list-element'}>
                        <a className={'navbar-link'} href="#mmorpg">MMORPG</a>
                    </li>
                </div>
                <div>
                    <li className={'list-element'}>
                        <a className={'navbar-link'} href="#shooters">Shooters</a>
                    </li>
                </div>
                <div>
                    <li className={'list-element'}>
                        <a className={'navbar-link'} href="#hackNslash">Hack&Slash</a>
                    </li>
                </div>
                <div>
                    <li className={'list-element'}>
                        <a className={'navbar-link'} href="#contact">Contact us</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavigationBar;