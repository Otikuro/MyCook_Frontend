import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';

export default function SignupForm () {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputContainer}>User</Text>
                <TextInput style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputContainer}>Email</Text>
                <TextInput style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputContainer}>Password</Text>
                <TextInput style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputContainer}>Password</Text>
                <TextInput style={styles.input} />
            </View>

            <Pressable>
                <Text>Create account</Text>
            </Pressable>

            <Text>Already have an account?</Text>
            <Pressable>
                <Text>Log in</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 30,
        width: 'auto',
        maxWidth: 250
    },
    label: {

    },
    input: {
        flex: 1,
        height: 10,
        borderWidth: 1,
        padding: 10,
        marginLeft: 10,
        borderRadius: 5,
        maxWidth: 160
    }
});