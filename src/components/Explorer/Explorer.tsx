import { useState } from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";
import Post from "../Post/Post";

const data = [
    {title: 'Titulo', description: 'descipodfniohiuohouhovreddfbdbbrebeoij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij'}, 
];

const renderItem = ({item}: {item: any}) => (<Post title={item.title} description={item.description} />);

export default function Explorer() {
    const [selected, setSelected] = useState('Posts');

    function selectorHandler (selectedSelector: string) {
        setSelected(selectedSelector);
    }

    return(
        <View style={styles.container}>
            <Searcher />

            <View style={styles.selector}>
                <Selector selectorHandler={selectorHandler} selected={selected}/>
            </View>

            <FlatList contentContainerStyle={styles.scroll} data={data} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '88%'
    },
    selector: {
        height: '6%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#dddddd'
    },
    scroll: {
        alignItems: 'stretch'
    }
});