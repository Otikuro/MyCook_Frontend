import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { COLORS } from '../../styleConstants';


export default function LoginForm({ loginHandler, signupHandler }: { loginHandler: (user: string, password: string) => void, signupHandler: () => void}) {    
    return (
        /* <DropShadow style={styles.containerShadows} > */
           <View style={[styles.container, styles.containerShadows]}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>User</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} />
                </View>

                <Pressable onPress={() => loginHandler('', '')} style={styles.login}>
                    <Text>Log in</Text>
                </Pressable>

                <Pressable onPress={signupHandler} >
                    <Text>Sign up</Text>
                </Pressable>
            </View>
        /* </DropShadow> */
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        maxHeight: '40%',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightOrange
    },
    containerShadows: {
        shadowColor: '#ffffff',
        elevation: 20,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 3, 
        borderColor: 'black',
        borderWidth: 1
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
    login: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'lightblue',
    }
});