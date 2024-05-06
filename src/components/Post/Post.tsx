import { View, Text, StyleSheet } from "react-native";

export default function Post () {
    return (
        <View style={styles.container}>
            <Text>Titulo</Text>
            <Text>Descripciooooooooooooooooooooooooooooon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '15%',
        width: '80%',
        margin: 10,
        backgroundColor: 'green'
    }
});