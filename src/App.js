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



function App() {
  return (

    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>

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
          <PrivateRoute path="/shop">
            <Shop />
          </PrivateRoute>

          {/* Blog Page */}
          <Route path="/blog">
            <Blogs />
          </Route>

          {/* 404 */}
          <Route path="*">
            <NotFound />
          </Route>


        </Switch>
        <Footer />
      </Router>
    </AuthProvider>

  );
}

export default App;
