import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm/LoginForm';
import SignupForm from './src/components/SignupForm/SignupForm';

export default function App() {
  const [isSigning, setIsSigning] = useState(false);

  function loginHandler(user: string, password: string): void {

  }

  function signupHandler(): void {
    setIsSigning((previousValue) => {return !previousValue});
  }

  return (
    <View style={styles.container} >
      {isSigning ?
        <SignupForm />
        :
        <LoginForm loginHandler={loginHandler} signupHandler={signupHandler} />
      }
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

