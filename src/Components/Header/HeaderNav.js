import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';


const HeaderNav = () => {
    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">IBN SINA TRUST</Navbar.Brand>
                    <Nav className="me-auto" gap={3}>
                        <Nav.Link href="#home"><h5>Home</h5></Nav.Link>
                        <Nav.Link href="#about"><h5>About Us</h5></Nav.Link>
                        <Nav.Link href="#doctor"><h5>Find A Doctor</h5></Nav.Link>
                        <Nav.Link href="#service"><h5>Our Services</h5></Nav.Link>
                        <Nav.Link href="#contact"><h5>Contact Us</h5></Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#fj"><Button>Login</Button></Nav.Link>
                        <Nav.Link href="#fsj"><Button>Register</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default HeaderNav;