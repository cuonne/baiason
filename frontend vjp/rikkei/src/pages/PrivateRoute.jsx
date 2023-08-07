import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;