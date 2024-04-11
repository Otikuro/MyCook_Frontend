import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

const EXPLORE_IMAGE = require('../../../assets/EXPLORE_IMAGE.png');
const NEW_POST_IMAGE = require('../../../assets/NEW_POST_IMAGE.png');
const LIBRARY_IMAGE = require('../../../assets/LIBRARY_IMAGE.png');

export default function Navigation() {
    return (
        <View style={styles.container}>

            <Pressable style={styles.imageContainer}>
                <Image source={EXPLORE_IMAGE} style={styles.image}/>
            </Pressable>
            <Pressable style={styles.imageContainer}>
                <Image source={NEW_POST_IMAGE} style={styles.image}/>
            </Pressable>
            <Pressable style={styles.imageContainer}>
                <Image source={LIBRARY_IMAGE} style={styles.image}/>
            </Pressable> 

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 32,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    imageContainer: {
        height: 32,
        width: 32
    },
    image: {
        height: 32,
        width: 32
    }
});