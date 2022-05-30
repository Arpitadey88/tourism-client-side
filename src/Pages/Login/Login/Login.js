import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from '../../../image/log.png';
import google from '../../../image/google.png';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home'
    // console.log('came from', location.state?.from); 

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleloginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="bg-white">
            <div className="container py-md-3 pt-5">
                <h1 className="text-center py-2">Log In To Explore More</h1>
                <div className="row g-0 pt-4 d-flex justify-content-center">

                    <div className="col-md-7 mt-md-3">
                        <img className="img-fluid cover-img" src={image} alt="" />
                    </div>
                    <div className="col-md-5 p-3">
                        <h3 className="text-center pb-md-4"> Please Login</h3>

                        <form onSubmit={handleloginSubmit}>
                            <div className="row mb-md-4">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Your Email" name="email"

                                        onChange={handleOnChange} required />
                                </div>
                            </div>

                            <div className="row mb-md-4">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password"

                                        onChange={handleOnChange} required />
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <Button className="px-5 py-2 border-0 rounded-3" variant="danger" size="lg" active type="submit">Login</Button>
                            </div>
                        </form>
                        {isLoading && <div className="my-3 text-center"><Spinner animation="border" variant="info" /></div>}

                        {user?.email && <div className='mt-md-4'><Alert variant="success">
                            Login Successfully !!
                        </Alert></div>}

                        {authError && <div className='mt-md-4'> <Alert variant="danger">{authError}</Alert> </div>}
                        <div className="text-center mt-5">
                            <img className='border border-primary rounded-start' style={{ height: '40px' }} src={google} alt="" />
                            <Button onClick={handleGoogleLogin} className="py-2 px-5 rounded-0 rounded-end" variant="primary" size="lg" active>Google Sign In</Button>
                            <p className="my-2">new user? Please <Link to="/register">Register</Link></p>
                        </div>

                    </div>

                    <div className="text-center">
                        <Link className="text-decoration-none" to="/home/services#services"><button className="btn btn-primary px-5 py-2">Close</button></Link>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Login;