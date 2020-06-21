import React from "react";
import "../styles/Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-container">
                <div className="quote-container">
                    <p className="quote">{props.quote}</p>
                </div>
                <div className="author-container">
                    <p className="author">{"- "+props.author}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
