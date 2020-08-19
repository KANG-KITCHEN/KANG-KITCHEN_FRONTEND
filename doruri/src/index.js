import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
//import Components from "views/Components/Components.js";
import InfoPage from "views/InfoPage/InfoPage.js";
import BoardPage from "views/BoardPage/BoardPage.js";
import MainPage from "views/MainPage/MainPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpPage from "views/SignUpPage/SignUpPage.js";
import SignInPage from "views/SignInPage/SignInPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Component from "views/Components/Components.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/board-page" component={BoardPage} />
      <Route path="/info-page" component={InfoPage} />
      <Route path="/signup-page" component={SignUpPage} />
      <Route path="/signin-page" component={SignInPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/component" component={Component} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

