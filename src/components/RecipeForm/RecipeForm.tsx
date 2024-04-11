import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function RecipeForm() {
    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextInput>

            </TextInput>

            <Text>Description</Text>
            <TextInput>

            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '89%',
        backgroundColor: 'red'
    }
});