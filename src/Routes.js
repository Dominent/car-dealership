import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderPage from "./pages/order";
import Vehicles from "./pages/vehicles";

const Routes = () => {
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
};

export default Routes;
