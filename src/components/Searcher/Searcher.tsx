import { Pressable, TextInput, View, StyleSheet, Image } from "react-native";

const EXPLORER_IMAGE = require('../../../assets/EXPLORER_IMAGE.png');
const FILTER_IMAGE = require('../../../assets/FILTER_IMAGE.png');

export default function Searcher() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image source={EXPLORER_IMAGE} style={styles.searcherImage} />
                <TextInput style={styles.inputSearchBar} />
            </View>

            <Pressable style={styles.filtersContainer}>
                <Image source={FILTER_IMAGE} style={styles.filtersImage} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        height: '75%',
        width: '80%',
        borderRadius: 8,
        marginLeft: '3%',
        flexDirection: 'row',
        backgroundColor: '#dddddd'
    },
    searcherImage: {
        width: 28,
        height: 28,
        marginTop: '1.5%',
        marginLeft: '1%'
    },
    inputSearchBar: {
        width: '98%',
        left: -28
    }, 
    filtersContainer: {
        width: 38,
        height: 38,
        marginLeft: 4
    },
    filtersImage: {
        width: 38,
        height: 38
    }
});