import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details/Details/Details';
import Register from './Pages/Login/Login/Register';
import Booking from './Pages/Bookng/Booking';
import AddNewService from './Pages/AddNewService/AddNewService';
import MyOrder from './Pages/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/addNewService">
              <AddNewService></AddNewService>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/order">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
