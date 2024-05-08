import { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import Selector from "../Selector/Selector";

export default function NewPost(){
    const [selected, setSelected] = useState('Posts');

    function selectorHandler (selectedSelector: string) {
        setSelected(selectedSelector);
    }

    return (
        <View style={styles.container}>
            <Selector selectorHandler={selectorHandler} selected={selected}/>

            <Text>Title</Text>
            <TextInput style={styles.input} />


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
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    input: {
        width: '80%',
        borderRadius: 8,
        backgroundColor: '#ffffff'
    },
    newPostButton: {
        backgroundColor: 'green'
    }
});