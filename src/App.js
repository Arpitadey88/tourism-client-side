import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details/Details/Details';
// import Register from './Pages/Login/Login/Register';
import AddNewService from './Pages/AddNewService/AddNewService';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import UpdateOrder from './Pages/UpdateOrder/UpdateOrder';
import Contact from './Pages/Home/Contact/Contact';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Header></Header> */}
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
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute path="/manageOrders">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <Route path="/update/:id">
              <UpdateOrder></UpdateOrder>
            </Route>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
