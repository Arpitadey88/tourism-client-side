import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from "../../../image/reg.png";


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleloginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("password didn't match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <div className=" bg-white">
            <div className="container py-md-3 pt-5">
                <h1 className="text-center"> Register & Stay Tuned</h1>
                <div className="row g-0  d-flex justify-content-around">

                    <div style={{ height: '470px' }} className="col-md-6 pe-md-5 py-3 order-lg-0 order-1">
                        <h3 className="text-center pt-2 pb-md-4"> Register Form</h3>

                        {!isLoading && <form onSubmit={handleloginSubmit}>
                            <div className="row mb-2 mb-md-4">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="name" className="form-control" id="inputEmail3" placeholder="Your Name" name="name" onChange={handleOnChange} required />
                                </div>
                            </div>
                            <div className="row mb-2 mb-md-4">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Your Email" name="email" onChange={handleOnChange} required />
                                </div>
                            </div>

                            <div className="row mb-2 mb-md-4">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" onChange={handleOnChange} required />
                                </div>
                            </div>
                            <div className="row mb-2 mb-md-4">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" name="password2" onChange={handleOnChange} required />
                                </div>
                            </div>

                            <div className="text-center py-2 py-md-3">
                                <Button style={{ backgroundColor: 'orange' }} className="px-5 border-0" size="lg" active type="submit">Register</Button>
                            </div>
                        </form>}
                        {isLoading && <div className="my-2 text-center"><Spinner animation="border" variant="info" /></div>}
                        {user?.email && <Alert variant="primary">
                            User Created Succesesfully !!
                        </Alert>}
                        {authError && <Alert variant="danger">{authError}</Alert>}

                        <div className="text-center pb-2 pb-md-3">
                            <p className="">already registerd? Please <Link to="/login">Login</Link></p>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img className="cover-img" src={image} alt="" />
                    </div>
                    <div className="text-center">
                        <Link className="text-decoration-none" to="/home/services#services"><button className="btn btn-primary px-5 py-2 ">Close</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Register;