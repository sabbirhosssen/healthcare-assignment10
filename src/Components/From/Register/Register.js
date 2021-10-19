import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Register = () => {
    return (
        <div>
            <div className="w-50  me-auto border rounded m-5 ">

                <br /> <br /><br /><br />
                <Form >
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>
                    <Form.Label className="text-danger"></Form.Label>

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

export default Register;