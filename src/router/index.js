import About from "../pages/About";
import Page404 from "../pages/Page404";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", component: <About />, exact: true },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostIdPage />, exact: true },
  { path: "/404", component: <Page404 />, exact: true },
];

export const publicRoutes = [
  { path: "/about", component: <About />, exact: true },
  { path: "/login", component: <Login />, exact: true },
  { path: "/404", component: <Page404 />, exact: true },
];
