import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "../styles/App.css";
import { publicRoutes, privateRoutes } from "../router";
import { AuthContext } from "../context";
import { Loader } from "./UI/loaders/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
            exact={route.exact}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/login" element={<Navigate to="/posts" />} />
      <Route path="/" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
            exact={route.exact}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
