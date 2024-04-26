import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import DocumentPicker from "react-native-document-picker";

export default function NewPost(){
    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextInput style={styles.input} />

{/*             <DocumentPicker>

            </DocumentPicker> */}

            <Text>Duration</Text>
            <TextInput style={styles.input} />

            <Text>Difficulty</Text>
            <TextInput style={styles.input} />

            <Text>Portions</Text>
            <TextInput style={styles.input} />

            <Text>Description</Text>
            <TextInput style={styles.input} />
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
    }
});