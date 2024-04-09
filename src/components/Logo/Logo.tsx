import React from 'react';
import { Image, View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');

export default function Logo () {
    return (
        <View>
            <Image source={LOGO_IMAGE} style={styles.image}/>

            <Text style={styles.title}>MyCook</Text>
        </View>
    );
}

const styles = StyleSheet.create({  
    image: {
        alignSelf: 'center',
        width: 128,
        height: 128
    },  
    title: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    }
});