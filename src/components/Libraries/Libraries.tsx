import { FlatList, View, StyleSheet } from "react-native";
import Library from "../Library/Library";

const data = [
    {title: 'My Posts', description: 'descipodfniohiuohouhovreddfrgteeivbrwvuerihnahuoeowhgorhouehourhouehporviorehiojgioergreiogibdbbrebeoij'}, 
    {title: 'Favorites', description: 'descipodfniohiuohouhooij'}, 
    {title: 'title', description: 'descipodfniohiuohouhooij'}, 
    {title: 'title', description: 'descipodfniohiuohouhooij'}, 
    {title: 'title', description: 'descipodfniohiuohouhooij'}, 
];

const renderItem = ({item}: {item: any}) => (<Library title={item.title} description={item.description} />);

export default function Libraries () {
    return(
        <View style={styles.container}>
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