import React from 'react';
import {routes} from "../../routes";
import {Link} from "react-router-dom";

const NavbarHeader = () => <Link to={routes.home} className={'list-header'}>Home</Link>;

export default NavbarHeader;