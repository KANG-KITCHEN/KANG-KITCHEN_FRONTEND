import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import "./index.css";

import "assets/scss/material-kit-react.scss?v=1.9.0";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// pages for this product
//import Components from "views/Components/Components.js";
import InfoPage from "views/InfoPage/InfoPage.js";
import BoardPage from "views/BoardPage/BoardPage.js";
import MainPage from "views/MainPage/MainPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpPage from "views/SignUpPage/SignUpPage.js";
import SignInPage from "views/SignInPage/SignInPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import AboutPage from "views/AboutPage/AboutPage.js";
import Component from "views/Components/Components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import AllergyModal from "views/MainPage/Sections/AllergyModal.js";
import SearchPage from "views/MainPage/SearchPage.js";
import DetailPage from "views/MainPage/DetailPage.js";

var hist = createBrowserHistory();

const theme = createMuiTheme({
  typography: {
    fontFamily: "Spoqa Han Sans",
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/board-page" component={BoardPage} />
        <Route path="/info-page" component={InfoPage} />
        <Route path="/signup-page" component={SignUpPage} />
        <Route path="/signin-page" component={SignInPage} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/about-page" component={AboutPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/component" component={Component} />
        <Route path="/test" component={AllergyModal} />
        <Route path="/search-page" component={SearchPage} />
        <Route path="/detail-page" component={DetailPage} />
      </Switch>
    </Router>
  </MuiThemeProvider>
  , document.getElementById("root")
);

