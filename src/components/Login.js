import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        /*
            !No es la mejor practica buscar uno por uno
            *Con una base de datos relacional no es necesario el siguiente codigo.
        */
        const url = "http://localhost:3333/users/";
        let response = await fetch(url, {
            method: "GET",
            mode: "cors",
        });

        response = await response.json();
        let userdata = response.filter(
            (user) => user.username === username && user.password === password
        );
        if (userdata.length === 0) {
            alert("No existe el usuario " + username);
            return;
        }

        userdata = userdata[0];

        /* Cambio el estado a registrado y redirecciona */ 
        props.handleRegisterState();
        props.auth.login(() => {
            history.push("/home");
        });
    };

    return (
        <div className="box">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label">Username</Form.Label>
                    <Form.Control
                        autoComplete={'off'}
                        type="text"
                        onChange={handleChangeUsername}
                        placeholder="Enter your username"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleChangePassword}
                        placeholder="Enter your password"
                    />
                </Form.Group>
                <button
                    onClick={handleSubmit}
                    className="submit-button"
                    variant="primary"
                    type="submit"
                >
                    Ready!
                </button>
            </Form>
        </div>
    );
};
