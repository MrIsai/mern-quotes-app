import React from "react";
import { Jumbotron } from "react-bootstrap";

export const Profile = (props) => {
    return (
        <div className="profile">
            <Jumbotron className="jumbotron">
                <h1>Your profile</h1>
                <p>
                    Here you can watch or delete your stored favorite quotes and share in your
                    socials media.

                    Also you can edit your data profile.
                </p>
                <p>
                    <button className="submit-button">Edit Profile</button>
                </p>
            </Jumbotron>
        </div>
    );
};
