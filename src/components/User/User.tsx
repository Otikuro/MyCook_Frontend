import { View, Image, Text, Pressable } from "react-native";

export default function User ({logoutHandler}: {logoutHandler: () => void}) {
    return (
        <View>
            <Image />
            <Text>Nombre de usuario</Text>

            <Pressable onPress={logoutHandler}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    );
}