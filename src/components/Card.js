import React from 'react';

export const Card = props => {
    return(
        <div className="quote-card">
            <div className="quote-card-container">
                <div className="quote-card-text">
                    {props.quote}
                </div>
                <div className="quote-card-author">
                    {props.author}
                </div>
            </div>
        </div>
    );
}