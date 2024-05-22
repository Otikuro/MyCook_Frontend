import { Text, Pressable, Image, View, StyleSheet, TextInput } from "react-native";

export default function Ingredient({ ingredientName }: { ingredientName: string }) {
    return (
        <View style={styles.row}>
            <Text>{ingredientName}</Text>

            <TextInput/>

            <Pressable onPress={}>
                <Text>Borrar</Text>
                <Image></Image>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1
    },
});