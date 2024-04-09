import React from "react";
import { Image,View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import Logo from '../Logo/Logo';
import { COLORS } from '../../styleConstants';

export default function SignupForm({ signupHandler }: { signupHandler: () => void }) {
    return (
        <View style={styles.container}>
            <Logo/>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputContainer}>User</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputContainer}>Email</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputContainer}>Password</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputContainer}>Repeat your password</Text>
                    <TextInput style={styles.input} />
                </View>

                <Pressable style={styles.button}>
                    <Text>Create account</Text>
                </Pressable>

                <Text>Already have an account?</Text>
                <Pressable onPress={signupHandler}>
                    <Text style={styles.link}>Log in</Text>
                </Pressable>
            </View>
        </View>
    );
}
/* Duplicidad de estilos */
const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        marginTop: 10,
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