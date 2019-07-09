import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/link" component={Home} />
    <Route path="/disabled" component={Home} />
  </Switch>;
