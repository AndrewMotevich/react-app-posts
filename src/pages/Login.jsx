import React, { useContext } from "react";
import MyInput from "../components/UI/inputs/MyInput";
import MyButton from "../components/UI/buttons/MyButton";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  function login(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton onClick={() => {}}>Log In</MyButton>
      </form>
    </div>
  );
};

export default Login;
