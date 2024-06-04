import { useRoute } from "@react-navigation/native";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";

const USER_IMAGE = require('../../../assets/USER_IMAGE.png');

export default function User() {
    const route = useRoute();
    let logoutHandler;

    if (route.params && route.params.logoutHandler) {
        logoutHandler = route.params.logoutHandler;
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={USER_IMAGE} />

            <Text style={styles.nickname}>Nombre de usuario</Text>

            <Pressable onPress={logoutHandler}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    image: {
        width: 128,
        height: 128,
        marginTop: 24,
        marginBottom: 24
    },
    nickname: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});