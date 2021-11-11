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



function App() {
  return (

    <Router>
      <Navigation />
      <Switch>

        {/* Default Home Page */}
        <Route exact path="/">
          <HomePage />
        </Route>

        {/* Home Page */}
        <Route exact path="/home">
          <HomePage />
        </Route>

        {/* Sign Up Page */}
        <Route exact path="/signUp">
          <Signup />
        </Route>

        {/* Login Page */}
        <Route exact path="/login">
          <Login />
        </Route>






      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
