import { Text, StyleSheet, Pressable } from "react-native";

export default function Channel ({title, description}: {title: string, description: string}) {
    return(
        <Pressable style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#000000',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});