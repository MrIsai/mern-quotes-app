import React from "react";
import {Jumbotron} from 'react-bootstrap';
import '../styles/About.css';

export const About = (props) => {
    return (
        <div className="about">
            <Jumbotron className="jumbotron">
                <h1>About</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                </p>
                <p>
                    <button className="submit-button">Learn more</button>
                </p>
            </Jumbotron>
        </div>
    );
};
