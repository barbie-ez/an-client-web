import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isloggedIn() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
