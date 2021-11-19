import React, { useContext } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Login = () => {
  const { log } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouter path="/login" auth={log} component={LoginScreen} />
        <PrivateRouter path="/" auth={log} component={AppRouter} />
      </Switch>
    </BrowserRouter>
  );
};
export default Login;
