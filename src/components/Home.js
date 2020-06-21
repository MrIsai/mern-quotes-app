import React, { useEffect } from "react";
import Card from "./Card";
import { requestQuotes } from "../scripts/Querys";
import "../styles/Home.css";

const Home = (props) => {
    const reqQuotes = async () => {
        let data = await requestQuotes();
        console.log(data);
    };
    useEffect(() => {
        reqQuotes();
    }, []);
    return (
        <div className="home-container">
            <div>
                <h2>Home</h2>
            </div>
            <div className="table">...</div>
        </div>
    );
};

export default Home;
