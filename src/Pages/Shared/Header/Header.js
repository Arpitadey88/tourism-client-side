import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logo.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar style={{ backgroundColor: 'white' }} className="container-fluid navbar" sticky="top" collapseOnSelect expand="lg" variant="dark">
            < >
                <Navbar.Brand href="#home">
                    <img alt="" src={logo} width="50" height="40 "
                        className="d-inline-block"
                    /><span style={{ color: 'midnightBlue' }} className="nav-text fs-5 ps-1">ClickTravel</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="nav-text fs-5 " as={HashLink} to="/home#home">Banner</Nav.Link>
                    <Nav.Link className="nav-text fs-5" as={HashLink} to="/home#banner">About</Nav.Link>
                    <Nav.Link className="nav-text fs-5" as={HashLink} to="/home#services">Feature</Nav.Link>
                    <Nav.Link className="nav-text fs-5" as={HashLink} to="/register">Register</Nav.Link>
                    {/* <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link> */}
                    {/* <Nav.Link as={HashLink} to="/booking">Booking</Nav.Link> */}

                    {user?.email ?
                        <Button onClick={logOut} variant="primary">Logout</Button> :
                        <Nav.Link className="nav-text fs-5" as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>

                    <NavDropdown className="nav-text fs-5" title="Dashboard" id="basic-nav-dropdown">
                        <Nav.Link className='nav-text border-bottom' as={Link} to="/myOrder#myOrder">My Order</Nav.Link>
                        <Nav.Link className='nav-text border-bottom' as={Link} to="/manageOrders#manageOrders">Manage Order</Nav.Link>
                        <Nav.Link className='nav-text' as={Link} to="/addNewService#addNewService">Add Service</Nav.Link>
                    </NavDropdown>
                </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Header;