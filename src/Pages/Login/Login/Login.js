import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from '../../../image/log.png';
import google from '../../../image/google.png';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home'
    // console.log('came from', location.state?.from); 


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div style={{ backgroundColor: '#92A9BD' }} className="text-white">
            <div className="container py-md-5 pt-5">
                <h2 className="text-center py-2">Please Log In To Explore More</h2>
                <div className="row g-0 pt-4 d-flex justify-content-center">

                    <div className="col-md-7">
                        <img className="img-fluid cover-img" src={image} alt="" />
                    </div>
                    <div className="col-md-5 p-3">
                        <h2 className="text-center pb-md-4"> <b>Login Form</b></h2>
                        <form onSubmit=''>
                            <div className="row mb-md-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Your Email" name="email" onChange='' required />
                                </div>
                            </div>

                            <div className="row mb-md-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" onChange='' required />
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <Button className="px-5 py-2 border-0 rounded-3" variant="danger" size="lg" active type="submit">Login</Button>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <img className='border border-1 rounded-start' style={{ height: '40px' }} src={google} alt="" />
                            <Button onClick={handleGoogleLogin} className="py-2 px-5 rounded-0 rounded-end" variant="primary" size="lg" active>Google Sign In</Button>
                            <p className="my-2">new user? Please <Link to="/register">Register</Link></p>
                        </div>
                    </div>

                    {/* <div className="col-md-6 border pt-5 justify-content-center align-items-center" style={{ backgroundColor: 'azure' }}>
                    <h2 className="text-center pt-5" style={{ color: 'brown' }}> Login Form</h2>

                    <div className="text-center my-3">
                        <Button onClick={handleGoogleLogin} className="mt-1 px-5" variant="danger" size="lg" active>Google Sign In</Button>
                    </div>
                </div> */}

                </div>
            </div>
        </div >
    );
};

export default Login;