import { useState } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";
import Post from "../Post/Post";

export default function Explorer() {
    const [selected, setSelected] = useState('Posts');

    function selectorHandler (selectedSelector: string) {
        setSelected(selectedSelector);
    }

    return(
        <View style={styles.container}>
            <View style={styles.searcher}>
                <Searcher />
            </View>

            <View style={styles.selector}>
                <Selector selectorHandler={selectorHandler} selected={selected}/>
            </View>

            <ScrollView contentContainerStyle={styles.scroll}>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    searcher: {
        height: '6%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'purple'
    },
    selector: {
        height: '6%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#dddddd'
    },
    scroll: {
        height: '80%',
        alignItems: 'center'
    }
});