import React, {useState} from 'react';
import {routes} from "../../../routes";
import './navbar.css';
import NavbarItem from "./NavbarItem";
import NavbarMenuIcon from "./NavbarMenuIcon";
import NavbarHeader from "./NavbarHeader";

const ResponsiveNavbar = () => {
    const navbarBodyId = 'navbar-ul';
    // const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false);

    return (
        <div>
            <nav role={"navigation"} className={'navbar-container'}>
                <ul className={'navbar-list-items'} id={navbarBodyId}>
                    <NavbarHeader/>
                    <NavbarItem linkText={'MMORPG'} path={routes.mmorpg}/>
                    <NavbarItem linkText={'Shooters'} path={routes.shooters}/>
                    <NavbarItem linkText={'Hack&Slash'} path={routes.hack_and_slash}/>
                    <NavbarItem linkText={'Contact us'} path={routes.contact_form}/>
                    <NavbarMenuIcon navbarBodyId={navbarBodyId}/>
                </ul>
            </nav>
        </div>
    );
};

export default ResponsiveNavbar;