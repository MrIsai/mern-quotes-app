import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { Desk } from "../components/Desk";
import { Card } from "../components/Card";
import { requestAll } from "../scripts/requestQuotes";
import "../styles/Home.css";

var re = new RegExp(
    "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$"
);

export const Home = (props) => {
    const [quotes, setQuotes] = useState([]);
    const [search, setSearch] = useState("");

    const handlerQuotes = async () => {
        const quotes_arr = await requestAll();
        setQuotes(quotes_arr);
    };

    const handlerSearch = (e) => {
        //console.log(`search: ${search} value: ${e.target.value} length: ${search.length}`);

        /* Validating input value */
        if (re.test(e.target.value)) {
            setSearch(e.target.value);
        }
    };

    useEffect(() => {
        console.log(`Rendering search: ${search}`);
        handlerQuotes();
    }, [search]);

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
                {search.length <= 1
                    ? quotes.map((v, i) => (
                          <Card key={i} quote={v.quote} author={v.author} />
                      ))
                    : quotes.map((v, i) => {
                          if (v.author.search(search) !== -1)
                              return (
                                  <Card
                                      key={i}
                                      quote={v.quote}
                                      author={v.author}
                                  />
                              );
                      })}
            </Desk>
        </div>
    );
};
