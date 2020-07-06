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
            <Navbar className="desk-container-navbar" bg="light" expand="lg">
                <Navbar.Collapse
                    id="desk-navbar-nav"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Form inline onSubmit={(e) => e.preventDefault()}>
                        <FormControl
                            type="text"
                            placeholder="Search by author"
                            className="mr-sm-2 search-input"
                            onChange={props.handlerSearch}
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className="desk-container">{props.children}</div>
        </div>
    );
};
