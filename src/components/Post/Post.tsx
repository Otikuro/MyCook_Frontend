import { View, Text, StyleSheet } from "react-native";

export default function Post ({title, description}: {title: string, description: string}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: 'black',
        padding: 8,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
    }
});