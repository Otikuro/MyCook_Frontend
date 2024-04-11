import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');
const USER_IMAGE = require('../../../assets/USER_IMAGE.png');

export default function Header ({logoutHandler}: {logoutHandler: () => void}) {
    return (
        <View style={styles.container}>
            <View style={[styles.imageContainer, styles.logo]}>
                <Image source={LOGO_IMAGE} style={styles.image}/>
            </View>

            <Text style={styles.title}>MyCook</Text>
            
            <Pressable onPress={logoutHandler} style={[styles.imageContainer, styles.user]}>
                <Image source={USER_IMAGE} style={styles.image} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        width: 32,
        height: 32
    },
    image: {
        width: 32,
        height: 32,
    }, 
    logo: {
   
    },
    user: {
   
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});