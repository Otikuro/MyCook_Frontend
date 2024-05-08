import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";

export default function RecipeForm() {
    return (
        <View style={styles.container}>
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