import { Pressable, TextInput, View, StyleSheet, Image } from "react-native";
const EXPLORER_IMAGE = require('../../../assets/EXPLORER_IMAGE.png');
const FILTER_IMAGE = require('../../../assets/FILTER_IMAGE.png');

export default function Searcher() {
    return (
        <>
            <View style={styles.searchBar}>
                <Image source={EXPLORER_IMAGE} style={styles.searcherImage} />
                <TextInput style={styles.inputSearchBar} />
            </View>

            <Pressable style={styles.filtersContainer}>
                <Image source={FILTER_IMAGE} style={styles.filtersImage} />
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'column',
       height: '100%',
       justifyContent: 'space-between'
    },
    searchBar: {
        height: '80%',
        width: '82%',
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
        width: '90%'
    }, 
    filtersContainer: {
        width: 38,
        height: 38,
        marginRight: 8
    },
    filtersImage: {
        width: 38,
        height: 38
    }
});