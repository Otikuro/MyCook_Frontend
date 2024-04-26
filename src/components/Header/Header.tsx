import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');
const USER_IMAGE = require('../../../assets/USER_IMAGE.png');

export default function Header ({logoutHandler}: {logoutHandler: () => void}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={LOGO_IMAGE} style={styles.image}/>
            </View>

            <Text style={styles.title}>MyCook</Text>
            
            <Pressable onPress={logoutHandler} style={styles.imageContainer}>
                <Image source={USER_IMAGE} style={styles.image} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
<<<<<<< HEAD
        height: '7%',
=======
        height: 60,
>>>>>>> parent of ce9744ce (Tercer)
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'green',
    },
    imageContainer: {
        width: 38,
        height: 38
    },
    image: {
        width: 38,
        height: 38,
    }, 
    title: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});