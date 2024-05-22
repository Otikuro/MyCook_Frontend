import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { islogged, login, register } from "./src/HTTP Requests/auth";
import {
  checkHealth,
  sessionId,
  setSessionId,
} from "./src/HTTP Requests/general";
import { AxiosError, AxiosResponse } from "axios";
import Header from './src/components/Header/Header';
import Navigation from './src/components/Navigation/Navigation';
import LoginForm from "./src/components/LoginForm/LoginForm";
import SignupForm from "./src/components/SignupForm/SignupForm";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  function loginHandler(username: string, password: string): void {
    function handleValidLogin(response: AxiosResponse) {
      setSessionId(response.data.session);
      setIsLoggedIn(true);
      islogged().then((response) => console.log(response));
    }

    function handleInvalidLogin(error: AxiosError) {
      console.log(error.message);
      setIsLoggedIn(false);
    }
    
    login(username, password)
    .then(handleValidLogin)
    .catch(handleInvalidLogin);
  }

  function logoutHandler() {
    setIsLoggedIn(false);
  }

  function signupHandler(username, email, password) {
    let formData = new FormData();
    formData.append('username', username);
    formData.append("email", email);
    formData.append("password", password);
    
    register(formData)
    .then((response) => console.log('User created: ' + response))
    .catch((error) => console.log(error));
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
    <>
      <StatusBar />

      {isLoggedIn || true ? (
        <>
          <Header/>
            
          <Navigation/> 
        </>
      ) : isSigning ? (
        <SignupForm signupHandler={signupHandler} changeFormHandler={changeFormHandler} />
      ) : (
        <LoginForm loginHandler={loginHandler} changeFormHandler={changeFormHandler} />
      )}
    </>
  );
}
