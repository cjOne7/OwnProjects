import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link, NavLink} from "react-router-dom";
import Paths from "../../routes";
import './navbar.css'

const RNavbar: React.FC = () => {
    return (
        <>
            <Navbar expand="lg" className={'navbar-bg-color'}>
                <Container>
                    <Navbar.Brand as={Link} to={Paths.HOME}>React.js + TS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to={Paths.HOME}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to={Paths.TODOS}>Todos</Nav.Link>
                            <Nav.Link as={NavLink} to={Paths.CONTACT_FORM}>Contact form</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
};

export default RNavbar;