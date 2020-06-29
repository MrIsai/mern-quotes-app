import React,{useState} from "react";
import {Form, Button} from 'react-bootstrap';

export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Click');
    }

    return (
        <div className="box">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label">Username</Form.Label>
                    <Form.Control type="text" onChange={handleChangeUsername} placeholder="Enter your username" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control type="password" onChange={handleChangePassword} placeholder="Enter your password" />
                </Form.Group>
                <button onClick={handleSubmit} className="submit-button" variant="primary" type="submit">
                    Listo
                </button>
            </Form>
        </div>
    );
};
