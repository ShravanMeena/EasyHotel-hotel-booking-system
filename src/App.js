import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
