import { Image, Pressable, StyleSheet } from 'react-native';
const EXPLORER_IMAGE = require('../../../assets/EXPLORER_IMAGE.png');
const NEW_POST_IMAGE = require('../../../assets/LOGO_IMAGE.png');
const LIBRARY_IMAGE = require('../../../assets/LOGO_IMAGE.png');

export default function Navigation({ navigationHandler }: { navigationHandler: (selectedTab: string) => void }) {
    return (
        <>
            <Pressable style={styles.imageContainer} onPress={() => navigationHandler('Explorer')} >
                <Image source={EXPLORER_IMAGE} style={styles.image} />
            </Pressable>
            <Pressable style={styles.imageContainer} onPress={() => navigationHandler('NewPost')}>
                <Image source={NEW_POST_IMAGE} style={styles.image} />
            </Pressable>
            <Pressable style={styles.imageContainer} onPress={() => navigationHandler('Library')}>
                <Image source={LIBRARY_IMAGE} style={styles.image} />
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 38,
        width: 38,
        margin: '1%'
    },
    image: {
        height: 38,
        width: 38
    }
});