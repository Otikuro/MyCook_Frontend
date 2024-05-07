import { Image, Text, View, StyleSheet, Pressable } from "react-native";

const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');
const USER_IMAGE = require('../../../assets/USER_IMAGE.png');

export default function Header ({viewHandler}: {viewHandler: (selectedView: string) => void}) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.imageContainer} onPress={() => viewHandler('Explorer')}>
                <Image source={LOGO_IMAGE} style={styles.image}/>
            </Pressable>

            <Pressable onPress={() => viewHandler('Explorer')}>
                <Text style={styles.title}>MyCook</Text>
            </Pressable>
            
            <Pressable style={styles.imageContainer} onPress={() => viewHandler('User')}>
                <Image style={styles.image} source={USER_IMAGE}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        width: 38,
        height: 38,
        marginRight: 8,
        marginLeft: 8
    },
    image: {
        width: 38,
        height: 38,
    }, 
    title: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});