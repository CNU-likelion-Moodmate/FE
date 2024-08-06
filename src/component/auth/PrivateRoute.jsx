import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const user = useSelector((state) => state.user.value);
  const isLogin = user.name && user.email;

  if (isLogin) {
    return <Outlet />;
  }
  
  return <Navigate replace to="/login" />;
}