import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Selector ({selectorHandler, selected}: {selectorHandler: (selectedSelector: string) => void, selected: any}) {    
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, selected === 'Posts' ? styles.selected : null]} onPress={() => selectorHandler('Posts')}>
                <Text>Posts</Text>
            </Pressable>

            <Pressable style={[styles.button, selected === 'Channels' ? styles.selected : null]} onPress={() => selectorHandler('Channels')}>
                <Text>Channels</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#dddddd'
    },
    button: {
        height: '80%',
        width: '46%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
        backgroundColor: '#ffffff'
    }
});