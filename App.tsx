import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './src/components/LoginForm/LoginForm';
import SignupForm from './src/components/SignupForm/SignupForm';
import { islogged, logSess, login, setSessionId } from './src/HTTP Requests/auth';
import Header from './src/components/Header/Header';
import { AxiosError, AxiosResponse } from 'axios';
//import RecipeForm from './src/components/RecipeForm/RecipeForm';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  function loginHandler(username: string, password: string): void {
    function handleValidLogin(response: AxiosResponse){
      console.log(response.data.message);
      setSessionId(response.data.session)
      logSess();
      setIsLoggedIn(true);
      islogged().then(response=>console.log(response))
    }
    function handleIvalidLogin(error: AxiosError){
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

  function logoutHandler () {
    setIsLoggedIn(false);
  }

  return (
    <>
      {isLoggedIn ?
        <View>
          <Header logoutHandler={logoutHandler} ></Header>
          {/* <RecipeForm></RecipeForm>  */}
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

