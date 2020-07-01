import React from "react";
import "../styles/Home.css";
import { Jumbotron } from "react-bootstrap";

export const Home = (props) => {
    return (
        <div className="home">
            <Jumbotron className="jumbotron">
                <h1>Home</h1>
                <p>
                    This is a simple app that show some deep quotes in atractive
                    cards.
                </p>
                <p>
                    <button className="submit-button">Learn more</button>
                </p>
            </Jumbotron>
        </div>
    );
};
