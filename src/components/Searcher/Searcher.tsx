import { useState } from "react";
import { Pressable, TextInput, View, StyleSheet, Image } from "react-native";

const EXPLORER_IMAGE = require('../../../assets/EXPLORER_IMAGE.png');
const FILTER_IMAGE = require('../../../assets/FILTER_IMAGE.png');

export default function Searcher({ searchHandler }: { searchHandler: (inputText: string) => void }) {
    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput style={styles.inputSearchBar} value={inputText} onChangeText={setInputText} onSubmitEditing={() => searchHandler(inputText)} />

                <Pressable onPress={() => searchHandler(inputText)}>
                    <Image style={styles.searcherImage} source={EXPLORER_IMAGE} />
                </Pressable>
            </View>

            <Pressable style={styles.filtersContainer}>
                <Image style={styles.filtersImage} source={FILTER_IMAGE} />
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
        alignItems: 'center',
        backgroundColor: 'white'
    },
    searchBar: {
        height: '70%',
        width: '80%',
        borderRadius: 8,
        marginLeft: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dddddd'
    },
    searcherImage: {
        width: 28,
        height: 28
    },
    inputSearchBar: {
        width: '90%',
        left: 4
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