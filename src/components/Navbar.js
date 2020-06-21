import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = (props) => {
    const [homeSelected, setHomeSelected] = useState(true);
    const [aboutSelected, setAboutSelected] = useState(false);

    let bgNoSelected = {backgroundColor:"#f0f0f0"};
    let bgSelected = {backgroundColor:"#000"};

    const handleHomeSelected = () => {
        if(!homeSelected){
            setHomeSelected(true);
            setAboutSelected(false);
        }
    }
    const handleAboutSelected = () => {
        if(!aboutSelected){
            setAboutSelected(true);
            setHomeSelected(false);
        }
    }
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li
                    style={homeSelected ? bgSelected : bgNoSelected}
                    className="nav-item"
                >
                    <Link
                        style={
                            homeSelected
                                ? { color: "#f0f0f0" }
                                : { color: "black" }
                        }
                        onClick={handleHomeSelected}
                        className="nav-link"
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li
                    style={aboutSelected ? bgSelected : bgNoSelected}
                    className="nav-item"
                >
                    <Link
                        style={
                            aboutSelected
                                ? { color: "#f0f0f0" }
                                : { color: "black" }
                        }
                        onClick={handleAboutSelected}
                        className="nav-link"
                        to="/about"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
