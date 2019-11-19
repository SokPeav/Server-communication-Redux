import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./../menuPage/Home";
import About from "./../menuPage/About";
import ViewDetail from "./../CRUD/ViewDetail"
import PrivateRoute from "./../Auth/PrivateRoute";
import AdminPage from "./../menuPage/AdminPage";
import "./../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "../Auth/Login";

function AllRoute() {
  function RouteAll() {
    return (
      <nav>
        <ul class="nav-links">
          <li>
          <Link exact to="/home">
            Home
          </Link>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <Link to="/about">About Us</Link>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <Link to="/admin">
            <button class="login-button">Login</button>
          </Link>
        </ul>
      </nav>
    );
  }
  return (
    <div>
      <Router>
        <RouteAll />
        <Switch>
          <Route exact path={["/", "/home"]} children={<Home />}></Route>
          <Route path="/about" children={<About />} />
          <PrivateRoute path="/admin" children={<AdminPage />}></PrivateRoute>
          <Route path="/login" children={<LoginPage/>}></Route>
          <Route path="/detail/:id" children={<ViewDetail></ViewDetail>} />
          {/* <Route children={<Error />} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default AllRoute;
