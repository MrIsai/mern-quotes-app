import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const Signin = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [correctPassword, setCorrectPassword] = useState(false);

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeRePassword = (e) => {
        setRePassword(e.target.value);
        if (password !== e.target.value) setCorrectPassword(false);
        else setCorrectPassword(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = "http://localhost:3333/users/add";
        const body = { username: username, password: password, logged: true };
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            mode: "cors",
        });

        response = await response.json();
        console.log(response);
    };

    return (
        <div className="box">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label">Username</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChangeUsername}
                        placeholder="Enter a new username"
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
                        placeholder="Enter a new password"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicRePassword">
                    <Form.Label className="label">Re-Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleChangeRePassword}
                        placeholder="Re-enter your password"
                    />
                    <Form.Text className="text-muted">
                        {!correctPassword ? "Passwords are NOT equal" : 'Passwords are EQUAL!'}
                    </Form.Text>
                </Form.Group>
                <button
                    className="submit-button"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Sign in up
                </button>
            </Form>
        </div>
    );
};
