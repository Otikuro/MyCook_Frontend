import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './src/components/LoginForm/LoginForm';
import SignupForm from './src/components/SignupForm/SignupForm';
import Main from './src/components/Main/Main';

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
          <Main logoutHandler={logoutHandler} />
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

