import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Pages/Home/HomePage/HomePage';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Navigation from './Shared/Navigation/Navigation';
import Footer from './Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/BlogPage/Blogs/Blogs';
import Shop from './Pages/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Purchase from './Pages/PrivatePages/Purchase/Purchase';
import MyOrders from './Pages/AdminPanel/NormalUser/MyOrders/MyOrders';
import Review from './Pages/AdminPanel/NormalUser/Review/Review';
import Payment from './Pages/AdminPanel/NormalUser/Payment/Payment';
import ManageAllOrders from './Pages/AdminPanel/Admin/ManageAllOrders/ManageAllOrders';
import Dashboard from './Pages/AdminPanel/Dashboard/Dashboard';
import AddNewProduct from './Pages/AdminPanel/Admin/AddNewProduct/AddNewProduct';
import MakeAdmin from './Pages/AdminPanel/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/AdminPanel/Admin/ManageProducts/ManageProducts';



function App() {
  return (

    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>

          {/* 
          ==================================
          Public Routes
          ==================================
         */}

          {/* Default Home Page */}
          <Route exact path="/">
            <HomePage />
          </Route>

          {/* Home Page */}
          <Route path="/home">
            <HomePage />
          </Route>

          {/* Sign Up Page */}
          <Route path="/signup">
            <Signup />
          </Route>

          {/* Login Page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Shop Page */}
          <Route path="/shop">
            <Shop />
          </Route>

          {/* Blog Page */}
          <Route path="/blog">
            <Blogs />
          </Route>


          {/* 
          ==================================
          Private Routes
          ==================================
         */}

          {/* Purchase */}
          {/* <PrivateRoute path="/purchase">
            <Purchase />
          </PrivateRoute> */}

          {/* MyOrders */}
          <PrivateRoute path="/myOrders">
            <MyOrders />
          </PrivateRoute>

          {/* Payment */}
          <PrivateRoute path="/payment">
            <Payment />
          </PrivateRoute>

          {/* Review */}
          <Route path="/review">
            <Review />
          </Route>

          {/* Review */}
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          {/* Dynamic Data Load to Purchase Page */}
          <Route path="/purchase/:productId">
            <Purchase />
          </Route>



          {/* 
          ==================================
          Admin Routes
          ==================================
         */}

          {/* Manage All Orders */}
          <Route path="/manageAllOrders">
            <ManageAllOrders />
          </Route>

          {/* Manage All Orders */}
          <Route path="/addNewProduct">
            <AddNewProduct />
          </Route>

          {/* Make Admin */}
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>

          {/* Manage Products */}
          <Route path="/manageProducts">
            <ManageProducts />
          </Route>


          {/* 404 */}
          <Route exact path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </AuthProvider>

  );
}

export default App;
