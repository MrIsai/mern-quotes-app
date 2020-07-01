import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import '../styles/Navbar.css';

export const NavbarComponent = (props) => {
    let history = useHistory();
    return (
        <Navbar className="navbar-component" bg="dark" expand="lg">
            <Navbar.Brand
                className="navbar-brand"
                style={{color:'#f0cc47'}}
                href=""
                onClick={() => {
                    if (props.auth) history.push("/home");
                    else history.push("/");
                }}
            >
                Famous Quotes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {props.auth ? (
                    <Nav className="mr-auto">
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
