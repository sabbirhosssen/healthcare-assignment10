import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const HeaderNav = () => {
    const { user, logOut } = useAuth();


    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="info" variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>IBN SINA TRUST</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to={"/home"}><h5>Home</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/about"}><h5>About</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/doctor"}><h5>Find A Doctor</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/service"}><h5>Service</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}><h5>Contact Us</h5></Nav.Link>
                        </Nav>
                        {user?.email ?
                            <Button variant="light" onClick={logOut}>Logout</Button> :
                            <Nav.Link as={Link} to={"/login"}><Button >Login</Button ></Nav.Link>
                        }


                        <Navbar.Text>
                            <a href="#login">{user?.displayName} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default HeaderNav;