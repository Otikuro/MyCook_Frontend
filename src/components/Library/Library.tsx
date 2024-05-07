import { FlatList, View, StyleSheet } from "react-native";
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

export default function Library () {
    return(
        <View style={styles.container}>
            <FlatList contentContainerStyle={styles.scroll} data={data} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '88%'
    },
    scroll: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});