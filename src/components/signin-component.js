import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const Signin = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeRePassword = (e) => setRePassword(e.target.value);

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
                        We'll never share your email with anyone else.
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

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="label">Re-Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleChangeRePassword}
                        placeholder="Re-enter your password"
                    />
                </Form.Group>
                <button
                    className="submit-button"
                    variant="primary"
                    type="submit"
                >
                    Sign in up
                </button>
            </Form>
        </div>
    );
};
