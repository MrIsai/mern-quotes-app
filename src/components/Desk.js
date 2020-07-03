import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";

/*
    Requirements:
    * Search quotes
    * Popular quotes
    * Quotes interesting for you
*/
export const Desk = (props) => {
    return (
        <div className="desk">
            <Navbar bg="light" expand="lg">
                <Navbar.Collapse
                    id="desk-navbar-nav"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        alignItems: "end",
                    }}
                >
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 brightness"
                            onChange={props.handlerSearch}
                        />
                        <button className="submit-button brightness">
                            Search
                        </button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className="desk-container">{props.children}</div>
        </div>
    );
};
