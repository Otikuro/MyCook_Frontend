import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Selector ({selectorHandler}: {selectorHandler: (selectedSelector: string) => void}) {    
    return (
        <>
            <Pressable style={styles.button} onPress={() => selectorHandler('Posts')}>
                <Text>Posts</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => selectorHandler('Channels')}>
                <Text>Channels</Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    button: {
        height: '80%',
        width: '46%',
        borderRadius: 8,
        marginTop: '1.25%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});