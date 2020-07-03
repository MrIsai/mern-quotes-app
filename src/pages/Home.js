import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { Desk } from "../components/Desk";
import { Card } from "../components/Card";
import { requestAll } from "../scripts/requestQuotes";
import "../styles/Home.css";

export const Home = (props) => {
    const [quotes, setQuotes] = useState([]);
    const [search, setSearch] = useState("");

    
    const handlerQuotes = async () => {
        console.log("Handler Quotes");
        let quotes_arr = await requestAll();
        setQuotes(quotes_arr);
    };

    const handlerSearch = (e) => setSearch(e.target.value);

    useEffect(() => {
        handlerQuotes();
    }, []);

    return (
        <div className="home">
            <Jumbotron className="jumbotron">
                <h1>Home</h1>
                <p>
                    This is a simple app that show some deep quotes in atractive
                    cards.
                </p>
                <p>
                    <button className="submit-button brightness">
                        Learn more
                    </button>
                </p>
            </Jumbotron>
            <Desk handlerSearch={handlerSearch}>
                {quotes.map((v, i) => {
                    if (search.length <= 0)
                        return (
                            <Card key={i} quote={v.quote} author={v.author} />
                        );
                    else {
                        if (v.author.search(search) !== -1)
                            return (
                                <Card
                                    key={i}
                                    quote={v.quote}
                                    author={v.author}
                                />
                            );
                    }
                })}
            </Desk>
        </div>
    );
};
