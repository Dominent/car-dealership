import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderPage from "./pages/order";
import Vehicles from "./pages/vehicles";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Vehicles} />
          <Route path="/Order">
            <OrderPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
