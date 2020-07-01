import React from "react";
import { Jumbotron } from "react-bootstrap";

export const Profile = (props) => {
    return (
        <div className="profile">
            <Jumbotron className="jumbotron">
                <h1>Your profile</h1>
                <p>This is a simple app that show some deep quotes.</p>
                <p>
                    <button className="submit-button">Learn more</button>
                </p>
            </Jumbotron>
        </div>
    );
};
