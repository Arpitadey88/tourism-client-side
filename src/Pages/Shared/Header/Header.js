import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logoM.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar style={{ backgroundColor: 'white' }} className="container-fluid" sticky="top" collapseOnSelect expand="lg" variant="dark">
            < >
                <Navbar.Brand href="#home"><img alt="" src={logo} width="100" height="45"
                    className="d-inline-block"
                /><span className="nav-text fs-4 text-primary">ClickTravel</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="nav-text fs-4" as={HashLink} to="/home#home">Banner</Nav.Link>
                    <Nav.Link className="nav-text fs-4" as={HashLink} to="/home#banner">About</Nav.Link>
                    <Nav.Link className="nav-text fs-4" as={HashLink} to="/home#services">Feature</Nav.Link>
                    <Nav.Link className="nav-text fs-4" as={HashLink} to="/register">Register</Nav.Link>
                    {/* <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link> */}
                    {/* <Nav.Link as={HashLink} to="/booking">Booking</Nav.Link> */}

                    {user?.email ?
                        <Button onClick={logOut} variant="primary">Logout</Button> :
                        <Nav.Link className="nav-text fs-4" as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>

                    <NavDropdown className="nav-text fs-4" title="Dashboard" id="basic-nav-dropdown">
                        <Nav.Link as={Link} to="/myOrder#myOrder">My Order</Nav.Link>
                        <Nav.Link as={Link} to="/manageOrders#manageOrders">Manage All Order</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link as={Link} to="/addNewService#addNewService">Add New Service</Nav.Link>
                    </NavDropdown>
                </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Header;