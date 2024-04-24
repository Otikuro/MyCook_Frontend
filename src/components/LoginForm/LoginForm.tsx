import React from 'react';
import { Image, View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import Logo from '../Logo/Logo';
import { COLORS } from '../../styleConstants';

export default function LoginForm({ loginHandler, signupHandler }: { loginHandler: (user: string, password: string) => void, signupHandler: () => void }) {
    return (
        <View style={styles.container}>
            <Logo/>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>User</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} />
                </View>

                <Pressable onPress={() => loginHandler('', '')} style={styles.button}>
                    <Text>Log in</Text>
                </Pressable>

                <Pressable onPress={signupHandler} >
                    <Text style={styles.link}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        marginTop: 20,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: COLORS.lightOrange
    },
    inputContainer: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
        width: 'auto',
        maxWidth: 250
    },
    label: {
        marginBottom: 5,
    },
    input: {
        height: 40,
        width: 240,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    button: {
        padding: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'lightblue',
    }, 
    link: {
        color: 'blue'
    }
});