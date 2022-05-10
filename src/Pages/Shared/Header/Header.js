import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logo.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    // change nav colour when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);

    return (
        <div>
            <div className="top-header">
                <div className="container">
                    <div className="top-header-item">
                        <div className="top-header-contact">
                            <a className="text-decoration-none" href="#home"
                                >+8801679122743</a>
                            <span className=" ms-4 top-header-social">
                                <a href="/"><i className="fab fa-pinterest"></i></a>
                                <a href="/"><i className="fab fa-facebook"></i></a>
                                <a href="/"><i className="fab fa-twitter"></i></a>
                                <a href="/"><i className="fab fa-behance"></i></a>
                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            </span>
                        </div>
                        <div className="top-header-menu">
                            <Link className="text-decoration-none">Contact Us</Link>
                            <span className="px-2 divider">|</span>
                            <Link className="text-decoration-none">FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-bg'>
                <nav className={color ? 'nav-area nav-scroll' : 'nav-area'} id="navbar_top">
                    <div className="navbar navbar-expand-lg menu-style fixed-top py-0 mt-md-4 mt-0">
                        <div className="container px-0 d-flex align-items-center">
                            <a className="navbar-brand logo-style" href="#home"><img className='logo-img fw-bold' width="40" height="25" src={logo} alt="" /><span>
                                Cl<span className='hero-span'>i</span>ck Tr<span className='hero-span'>a</span>vel</span> </a>

                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon top-bar"></span>
                                <span className="toggler-icon middle-bar"></span>
                                <span className="toggler-icon bottom-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                    <li className="active ms-3">
                                        <Nav.Link as={HashLink} className="nav-link" to="/home#main">Banner</Nav.Link>
                                    </li>

                                    <li className="ms-3">
                                        <Nav.Link as={HashLink} className="nav-link" to="/home#about">About</Nav.Link>
                                    </li>

                                    <li className="ms-3">
                                        <Nav.Link as={HashLink} className="nav-link" to="/home#services">Feature</Nav.Link>
                                    </li>

                                    <li className="ms-3 ">
                                        <Nav.Link as={HashLink} className="nav-link py-1 py-md-2" to="/register">Register</Nav.Link>
                                    </li>

                                    <li className='ms-3 ms-md-0'>
                                        <NavDropdown className="nav-link py-0" title="Dashboard" id="basic-nav-dropdown">
                                            <div className=' ps-3'>
                                                <Nav.Link className='nav-text  border-bottom' as={Link} to="/myOrder#myOrder">My Order</Nav.Link>
                                                <Nav.Link className='nav-text border-bottom' as={Link} to="/manageOrders#manageOrders">Manage Order</Nav.Link>
                                                <Nav.Link className='nav-text' as={Link} to="/addNewService#addNewService">Add Service</Nav.Link>
                                            </div>
                                        </NavDropdown>
                                    </li>

                                    {user?.email ?
                                        <li>
                                            <Nav.Link onClick={logOut} className="nav-link" >Logout</Nav.Link>
                                        </li>
                                        :
                                        <li className='ms-3 ms-md-0'>
                                            <NavLink className="nav-link" as={Link} to="/login">Login</NavLink>
                                        </li>
                                    }
                                    <li className='mt-md-2'>
                                        <Navbar.Text>
                                            <a style={{ textDecoration: 'none' }} className='' href="#login">{user?.displayName}</a>
                                        </Navbar.Text>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;