import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Selector ({type, selected, selectorHandler}: {type: 'Search'|'Post', selected: boolean, selectorHandler: () => void}) {    
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, !selected ? styles.selected : null]} onPress={() => selectorHandler()}>
                <Text>{type === 'Search' ? 'Posts' : 'Post'}</Text>
            </Pressable>

            <Pressable style={[styles.button, selected ? styles.selected : null]} onPress={() => selectorHandler()}>
                <Text>{type === 'Search' ? 'Channels' : 'Recipe'}</Text>
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
        height: '70%',
        width: '44%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
        backgroundColor: '#ffffff'
    }
});