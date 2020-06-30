import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarComponent = (props) => {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">{props.page}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {props.auth ? (
                    <Nav className="mr-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                    </Nav>
                ) : (
                    <Nav className="mr-auto">
                        <Link to="/">Quotes App</Link>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};
