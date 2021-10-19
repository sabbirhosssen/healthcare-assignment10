import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Col, Form, Row } from 'react-bootstrap';
import initializeAuthentication from '../../../Firebase/Firebase.init';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handaleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })

    }
    const handaleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handalePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handaleRegistation = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Should be at least 6 characters .')
            return;
        }
        if (!/(?=.*[A-Z].*[A-z])/.test(password)) {
            setError("Password must be contian 2 upper case .")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                console.log(user);
                setError('');
            }).catch(error => {
                setError(error.message);
            })

    }
    return (
        <div className="">
            <hr />
            <div className="w-50  border rounded m-5 ">

                <div className="py-4">
                    <img src="https://www.ibnsinatrust.com/image/04/logo-light.png" alt="" width="200px"
                        height="100px" />
                </div>
                <Form onSubmit={handaleRegistation}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handaleEmailChange} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handalePasswordChange}
                                type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>
                    <Form.Label className="text-danger">{error}</Form.Label>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>

        </div>
    );
};

export default Login;