import React from 'react';
import {routes} from "../../../routes";
import './navbar.css';
import NavbarItem from "./NavbarItem";
import NavbarMenuIcon from "./NavbarMenuIcon";
import NavbarHeader from "./NavbarHeader";

const ResponsiveNavbar = () => {
    return (
        <div>
            <nav role={"navigation"} className={'navbar-container'}>
                <ul className={'navbar-list-items'} id={'navbar'}>
                    <NavbarHeader/>
                    <NavbarItem linkText={'MMORPG'} path={routes.mmorpg}/>
                    <NavbarItem linkText={'Shooters'} path={routes.shooters}/>
                    <NavbarItem linkText={'Hack&Slash'} path={routes.hack_and_slash}/>
                    <NavbarItem linkText={'Contact us'} path={routes.contact_form}/>
                    <NavbarMenuIcon/>
                </ul>
            </nav>
        </div>
    );
};

export default ResponsiveNavbar;