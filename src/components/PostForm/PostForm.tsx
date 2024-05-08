import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";

export default function PostForm() {
    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextInput style={styles.input} />


            <Text>Description</Text>
            <TextInput style={styles.input} />

            <View style={styles.buttons}>
                <Pressable style={[styles.button, styles.cancelButton]}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>

                <Pressable style={[styles.button, styles.postButton]}>
                    <Text>Post</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: '6%'
    },
    input: {
        width: '100%',
        borderRadius: 8,
        marginVertical: 8, 
        backgroundColor: '#ffffff'
    },
    buttons: {
        width: '100%',
        marginVertical: 8, 
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8
    },
    button: {
        borderRadius: 4,
        flexGrow: 1
    },
    cancelButton: {       
        backgroundColor: '#FFE9E9',
    },
    cancelButtonText: {
        color: '#FF0000'
    },
    postButton: {
        backgroundColor: '#FFAE27',
    }
});