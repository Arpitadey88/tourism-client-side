import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logoM.png';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="container-fluid" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            < >
                <Navbar.Brand href="#home"><img alt="" src={logo} width="100" height="45"
                    className="d-inline-block"
                /><span>ClickTravel</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Our Platform</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#banner">About</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Feature</Nav.Link>
                    {/* <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link> */}
                    {/* <Nav.Link as={HashLink} to="/booking">Booking</Nav.Link> */}

                    {user?.email ?
                        <Button onClick={logOut} variant="primary">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>

                    <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                        <Nav.Link as={HashLink} to="#action/3.1">My Order</Nav.Link>
                        <Nav.Link as={HashLink} to="#action/3.1">Manage All Order</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link as={Link} to="/addNewService#addNewService">Add New Service</Nav.Link>
                    </NavDropdown>
                </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Header;