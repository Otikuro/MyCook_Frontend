import { createContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { islogged, login, register } from "./src/HTTP Requests/auth";
import {
  checkHealth,
  sessionId,
  setSessionId,
} from "./src/HTTP Requests/general";
import { AxiosError, AxiosResponse } from "axios";
import Navigation from './src/components/Navigation/Navigation';
import LoginForm from "./src/components/LoginForm/LoginForm";
import SignupForm from "./src/components/SignupForm/SignupForm";
import { LogOutHandlerContext } from "./src/Contexts/LogoutHandlerContext";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [signupFailed, setsignupFailed] = useState(false);

  function loginHandler(username: string, password: string): void {
    function handleValidLogin(response: AxiosResponse) {
      setIsLoggedIn(false);
      setSessionId(response.data.session);
      setIsLoggedIn(true);
      islogged().then((response) => console.log(response));
    }

    function handleInvalidLogin(error: AxiosError) {
      console.log(error.message);
      setLoginFailed(true);
      setIsLoggedIn(false);
    }

    login(username, password)
      .then(handleValidLogin)
      .catch(handleInvalidLogin);
  }

  function logoutHandler() {
    console.log('saliendo');
    setIsLoggedIn(false);
  }

  function signupHandler(username, email, password) {
    let formData = new FormData();
    formData.append('username', username);
    formData.append("email", email);
    formData.append("password", password);

    register(formData)
      .then(
        (response) => {
          console.log('User created: ' + response);
          setsignupFailed(false);
          /*           login(username, password)
                    .then(handleValidLogin)
                    .catch(handleInvalidLogin); */

        }
      )
      .catch(
        (error) => {
          console.log(error);
          setsignupFailed(true);
        }
      );
  }

  function changeFormHandler(): void {
    setIsSigning((previousValue) => {
      return !previousValue;
    });
  }

  useEffect(() => {
    checkHealth()
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <LogOutHandlerContext.Provider value={logoutHandler}>
      <StatusBar />

      {isLoggedIn ? (
        <Navigation/>
      ) : isSigning ? (
        <SignupForm signupFailed={signupFailed} signupHandler={signupHandler} changeFormHandler={changeFormHandler} />
      ) : (
        <LoginForm loginFailed={loginFailed} loginHandler={loginHandler} changeFormHandler={changeFormHandler} setIsLoggedIn={setIsLoggedIn} />
      )}
    </LogOutHandlerContext.Provider>
  );
}
