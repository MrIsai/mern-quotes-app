import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../styles/Navbar.css";

export const NavbarComponent = (props) => {
    let history = useHistory();

    return (
        <Navbar className="navbar-component" bg="dark" expand="lg">
            <Navbar.Brand
                className="navbar-brand"
                style={{ color: "#f0cc47" }}
                href=""
                onClick={() => {
                    if (props.auth) history.push("/home");
                    else history.push("/");
                }}
            >
                Famous Quotes
            </Navbar.Brand>

            {props.auth ? (
                <React.Fragment>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="linker" to="/profile">
                                Your Profile
                            </Link>
                            <Link className="linker" to="/about">
                                About
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </React.Fragment>
            ) : (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                </Navbar.Collapse>
            )}

            {props.auth ? (
                <React.Fragment>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text
                            style={{ color: "white", fontFamily: "Fira Sans" }}
                        >
                            Hello,{" "}
                            <Link
                                style={{ color: "#f0cc47", fontWeight: "800", letterSpacing:'2px' }}
                                to="/profile"
                            >
                                {props.username.charAt(0).toUpperCase() +
                                    props.username.slice(1)}
                                !
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </React.Fragment>
            ) : (
                <div></div>
            )}
        </Navbar>
    );
};
