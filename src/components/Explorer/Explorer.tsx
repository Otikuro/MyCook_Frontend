import { useState } from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";
import PostPreview from "../PostPreview/PostPreview";
import Post from '../Post/Post';

const data = [
    { id: 0, title: 'Titulo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea saepe at eligendi excepturi. Repudiandae atque fuga facilis temporibus quod harum mollitia aliquam quis unde libero eius architecto inventore quam id magnam, omnis quos natus.', userName: 'Nombre', score: 20 },
    { id: 1, title: 'Titulo', description: 'descipodfniohiuohouhooij consectetur adipisicing elit. Ab ea saepe at eligendi excepturi.', userName: 'Nombre', score: 20 },
    { id: 2, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 3, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 4, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 5, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 6, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 7, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 8, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 9, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 10, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 11, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 12, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 13, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 14, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 15, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
    { id: 16, title: 'Titulo', description: 'descipodfniohiuohouhooij', userName: 'Nombre', score: 20 },
];

export default function Explorer() {
    const [tabSelected, setTabSelected] = useState(false);
    const [postSelected, setPostSelected]: [number|undefined, (props: number|undefined) => void] = useState();

    function selectorHandler() {
        setTabSelected(previous => !previous);
    }

    function viewHandler() {
        setPostSelected(1);
    }

    const renderItem = ({ item }: { item: any }) => (<PostPreview id={item.id} title={item.title} description={item.description} userName={item.userName} score={item.score} viewHandler={viewHandler} />);

    return (
        <View style={styles.container}>
            {postSelected !== undefined ?
                <Post />
                :
                <>
                    <Searcher />

                    <Selector type={'Search'} tabSelected={tabSelected} selectorHandler={selectorHandler} />

                    <FlatList contentContainerStyle={styles.scroll} data={data} renderItem={renderItem} />
                </>
            }
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