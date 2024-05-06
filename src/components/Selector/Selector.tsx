import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Selector ({selectorHandler, selected}: {selectorHandler: (selectedSelector: string) => void, selected: any}) {    
    return (
        <>
            <Pressable style={[styles.button, selected === 'Posts' ? styles.selected : null]} onPress={() => selectorHandler('Posts')}>
                <Text>Posts</Text>
            </Pressable>

            <Pressable style={[styles.button, selected === 'Channels' ? styles.selected : null]} onPress={() => selectorHandler('Channels')}>
                <Text>Channels</Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    button: {
        height: '80%',
        width: '46%',
        borderRadius: 8,
        marginTop: '1.25%',
        backgroundColor: '#dddddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected: {
        backgroundColor: '#ffffff'
    }
});