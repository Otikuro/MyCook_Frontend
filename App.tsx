import React, { useEffect, useState } from "react";
import { islogged, login } from "./src/HTTP Requests/auth";
import {
  checkHealth,
  sessionId,
  setSessionId,
} from "./src/HTTP Requests/general";
import { AxiosError, AxiosResponse } from "axios";
import { StyleSheet, View, StatusBar } from "react-native";
import LoginForm from "./src/components/LoginForm/LoginForm";
import SignupForm from "./src/components/SignupForm/SignupForm";
import Main from "./src/components/Main/Main";
import { error } from "console";
//import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  function loginHandler(username: string, password: string): void {
    function handleValidLogin(response: AxiosResponse) {
      setSessionId(response.data.session);
      setIsLoggedIn(true);
      islogged().then((response) => console.log(response));
    }
    function handleIvalidLogin(error: AxiosError) {
      console.log(error.message);
      setIsLoggedIn(false);
    }
    login(username, password).then(handleValidLogin).catch(handleIvalidLogin);
  }

  function signupHandler(): void {
    setIsSigning((previousValue) => {
      return !previousValue;
    });
  }

  function logoutHandler() {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    checkHealth()
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <StatusBar />

      {isLoggedIn || true ? (
        <Main logoutHandler={logoutHandler} />
      ) : isSigning ? (
        <SignupForm signupHandler={signupHandler} />
      ) : (
        <LoginForm loginHandler={loginHandler} signupHandler={signupHandler} />
      )}
    </>
  );
}
