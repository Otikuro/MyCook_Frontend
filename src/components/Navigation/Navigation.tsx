import { View, Image, Pressable, StyleSheet } from 'react-native';

const EXPLORER_IMAGE = require('../../../assets/EXPLORER_IMAGE.png');
const NEW_POST_IMAGE = require('../../../assets/NEW_POST_IMAGE.png');
const LIBRARY_IMAGE = require('../../../assets/LIBRARY_IMAGE.png');

export default function Navigation({ viewHandler }: { viewHandler: (selectedView: string) => void }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => viewHandler('Explorer')} >
                <Image source={EXPLORER_IMAGE} style={styles.image} />
            </Pressable>
            <Pressable onPress={() => viewHandler('NewPost')}>
                <Image source={NEW_POST_IMAGE} style={styles.image} />
            </Pressable>
            <Pressable onPress={() => viewHandler('Library')}>
                <Image source={LIBRARY_IMAGE} style={styles.image} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    image: {
        height: 38,
        width: 38
    }
});