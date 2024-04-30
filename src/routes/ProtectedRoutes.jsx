import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={"/"} replace={true} />;
};

export default ProtectedRoutes;
