import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/AuthTypes";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = () => {
    dispatch({ type: AuthTypes.login });

    history.push("/");
  };
  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="animacion" />
      <h1 className="my-3">Login Screen</h1>
      <button onClick={handleLogin} className="btn btn-danger">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
