import { useState } from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";
import Post from "../Post/Post";

const data = [
    {title: 'Titulo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea saepe at eligendi excepturi. Repudiandae atque fuga facilis temporibus quod harum mollitia aliquam quis unde libero eius architecto inventore quam id magnam, omnis quos natus.', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20},
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
    {title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20}, 
];

const renderItem = ({item}: {item: any}) => (<Post title={item.title} description={item.description} userName={item.userName} score={item.score}/>);

export default function Explorer() {
    const [selected, setSelected] = useState(false);

    function selectorHandler () {
        setSelected(previous => !previous);
    }

    return(
        <View style={styles.container}>
            <Searcher />

            <Selector type={'Search'} selected={selected} selectorHandler={selectorHandler}/>

            <FlatList contentContainerStyle={styles.scroll} data={data} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '88%'
    },
    scroll: {
        alignItems: 'stretch'
    }
});