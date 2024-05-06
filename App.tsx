import React, { useState } from 'react';
import { islogged, logSess, login, setSessionId } from './src/HTTP Requests/auth';
import { AxiosError, AxiosResponse } from 'axios';
import { StyleSheet, View, StatusBar } from 'react-native';
import LoginForm from './src/components/LoginForm/LoginForm';
import SignupForm from './src/components/SignupForm/SignupForm';
import Main from './src/components/Main/Main';
//import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  function loginHandler(username: string, password: string): void {
    function handleValidLogin(response: AxiosResponse) {
      console.log(response.data.message);
      setSessionId(response.data.session)
      logSess();
      setIsLoggedIn(true);
      islogged().then(response => console.log(response))
    }
    function handleIvalidLogin(error: AxiosError) {
      console.log(error.message);
      setIsLoggedIn(false);
    }
    login(username, password)
    .then(handleValidLogin)
    .catch(handleIvalidLogin)
  }

  function signupHandler(): void {
    setIsSigning((previousValue) => { return !previousValue });
  }

  function logoutHandler() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <StatusBar/>

      {isLoggedIn || true ?
        <View>
          <Main logoutHandler={logoutHandler}></Main>
        </View>
        : (isSigning ?
          <SignupForm signupHandler={signupHandler} />
          :
          <LoginForm loginHandler={loginHandler} signupHandler={signupHandler} />
        )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
});
