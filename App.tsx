import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './src/components/LoginForm/LoginForm';
import SignupForm from './src/components/SignupForm/SignupForm';
import RecipeForm from './src/components/RecipeForm/RecipeForm';
import Header from './src/components/Header/Header';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  function loginHandler(user: string, password: string): void {
    setIsLoggedIn((previousValue) => { return !previousValue });
  }

  function signupHandler(): void {
    setIsSigning((previousValue) => { return !previousValue });
  }

  function logoutHandler () {
    setIsLoggedIn((previousValue) => { return !previousValue });
  }

  return (
    <>
      {isLoggedIn ?
        <View>
          <Header logoutHandler={logoutHandler} ></Header>
          <RecipeForm></RecipeForm> 
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

