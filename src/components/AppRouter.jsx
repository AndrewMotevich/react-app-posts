import React from "react";
import Posts from "../pages/Posts";
import About from "../pages/About";
import { Route, Routes, Navigate } from "react-router-dom";
import "../styles/App.css";
import Page404 from "../pages/Page404";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRouter;
