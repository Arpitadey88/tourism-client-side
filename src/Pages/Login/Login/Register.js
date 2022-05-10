import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  image  from "../../../image/reg.png";


const Register = () => {
  

    return (
        <div style={{ backgroundColor: '#92A9BD' }} className="text-white">
           <div className="container py-md-5 pt-5">
           <h2 className="text-center"> Please Register & Stay Tuned</h2>
            <div  className="row g-0  d-flex justify-content-around">

                <div style={{ height: '470px' }} className="col-md-6 pe-md-5 py-3 order-lg-0 order-1">
                    <h2 className="text-center pt-2 pb-md-4"> Register Form</h2>

                    <form onSubmit=''>
                        <div className="row mb-2 mb-md-4">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="name" className="form-control" id="inputEmail3" placeholder="Your Name" name="name" onBlur='' required />
                            </div>
                        </div>
                        <div className="row mb-2 mb-md-4">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Your Email" name="email" onBlur='' required />
                            </div>
                        </div>

                        <div className="row mb-2 mb-md-4">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" onBlur='' required />
                            </div>
                        </div>
                        <div className="row mb-2 mb-md-4">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" name="password2" onBlur='' required />
                            </div>
                        </div>

                        <div className="text-center py-2 py-md-3">
                            <Button style={{ backgroundColor: 'orange' }} className="px-5 border-0" size="lg" active type="submit">Register</Button>
                        </div>
                    </form>

                    <div className="text-center pb-2 pb-md-3">
                        <p className="">already registerd? Please <Link to="/login">Login</Link></p>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img className="cover-img" src={image} alt="" />
                </div>
            </div>
           </div>
        </div>

    );
}
export default Register;