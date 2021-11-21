import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Pages/Home/HomePage/HomePage';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Navigation from './Shared/Navigation/Navigation';
import Footer from './Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Shop from './Pages/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Purchase from './Pages/PrivatePages/Purchase/Purchase';
import Dashboard from './Pages/AdminPanel/Dashboard/Dashboard';
import ScrollToTop from './hooks/ScrollToTop';
import './App.css';
import BlogPage from "./Pages/BlogPage/BlogPage";




function App() {
  return (

    <AuthProvider>
      <Router>
        <ScrollToTop />
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
            <Footer />
          </Route>

          {/* Home Page */}
          <Route path="/home">
            <HomePage />
            <Footer />
          </Route>

          {/* Sign Up Page */}
          <Route path="/signup">
            <Signup />
            <Footer />
          </Route>

          {/* Login Page */}
          <Route path="/login">
            <Login />
            <Footer />
          </Route>

          {/* Shop Page */}
          <Route path="/shop">
            <Shop />
            <Footer />
          </Route>

          {/* Blog Page */}
          <Route path="/blog">
            <BlogPage />
            <Footer />
          </Route>


          {/* 
          ==================================
          Private Routes
          ==================================
         */}

          {/* Dynamic Data Load to Purchase Page */}
          <PrivateRoute path="/purchase/:productId">
            <Purchase />
            <Footer />
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          {/* 404 */}
          <Route exact path="*">
            <NotFound />
            <Footer />
          </Route>

        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
