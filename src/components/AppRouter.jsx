import React from "react";
import Posts from "../pages/Posts";
import About from "../pages/About";
import { Route, Routes, Navigate } from "react-router-dom";
import "../styles/App.css";
import Page404 from "../pages/Page404";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRouter;
