import React, { useState, useEffect } from "react";
import MainScreen from "./screens/Main";
import LoginScreen from "./screens/Login";
import LoadScreen from "./screens/Loading";

function App() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [firstCheck, setFirstCheck] = useState(true);

    const requestLog = async (id) => {
        const url = "http://localhost:3333/users/" + id;
        let response = await fetch(url, {
            method: "GET",
            mode: "cors",
        });

        let data = await response.json();
        console.log("Request Log:", data);
        setScreen(<MainScreen />);
        setUserData(data);
        setLoading(false);
        setFirstCheck(false);
    };
    const handleSetUserData = (data) => {
        console.log("new data:", data[0]);
        //console.log('id:',data[0]._id);
        localStorage.setItem("username_id", data[0]._id);
        setUserData(data[0]);
    };
    const [screen, setScreen] = useState(
        <LoginScreen handleSetData={handleSetUserData} />
    );

    useEffect(() => {
        let username_id = localStorage.getItem("username_id");
        if (username_id != null && firstCheck) {
            /* The user is logged? */
            requestLog(username_id);
        } else if (userData == null) {
            setUserData({});
            setFirstCheck(false);
        }
    },[]);
    

    if (loading && userData == null) return <LoadScreen />;
    else return screen;
}

export default App;
