import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeaderNav = () => {
    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>IBN SINA TRUST</Navbar.Brand>
                    <Nav className="me-auto" gap={3}>
                        <Nav.Link as={Link} to={"/home"}><h5>Home</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/about"}><h5>About Us</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/doctor"}><h5>Find A Doctor</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/service"}><h5>Our Services</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/contact"}><h5>Contact Us</h5></Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/login"}><Button>Login</Button ></Nav.Link>
                        <Nav.Link as={Link} to={"/signup"}><Button>Register</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default HeaderNav;