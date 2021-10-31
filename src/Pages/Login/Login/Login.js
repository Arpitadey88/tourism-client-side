import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import image from '../../../image/banner4.jpg'

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
        <div className="m-5 border p-5">
            <div className="row g-0">

                <div className="col-md-6 container-fluid">
                    <img className="img-fluid" src={image} alt="" />
                </div>

                <div className="col-md-6 border pt-5 justify-content-center align-items-center" style={{ backgroundColor: 'azure' }}>
                    <h2 className="text-center pt-5" style={{ color: 'brown' }}> Login Form</h2>

                    <div className="text-center my-3">
                        <Button onClick={handleGoogleLogin} className="mt-1 px-5" variant="danger" size="lg" active>Google Sign In</Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;