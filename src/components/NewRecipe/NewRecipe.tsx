import React from "react";
import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import DocumentPicker from "react-native-document-picker";

export default function NewPost(){
    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextInput style={styles.input} />

{/*             <DocumentPicker>

            </DocumentPicker> */}

{/*             <Text>Duration</Text>
            <TextInput style={styles.input} />

            <Text>Difficulty</Text>
            <TextInput style={styles.input} />

            <Text>Portions</Text>
            <TextInput style={styles.input} /> */}

            <Text>Description</Text>
            <TextInput style={styles.input} />

            <Pressable style={styles.newPostButton}>
                <Text>Publicar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        backgroundColor: 'white'
    },
    newPostButton: {
        backgroundColor: 'green'
    }
});