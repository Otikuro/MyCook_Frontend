import { FlatList, View, StyleSheet, Pressable, Text } from "react-native";
import Channel from "../Channel/Channel";
import { COLORS } from '../../styleConstants'

const data = [
    {title: 'My Posts', description: 'descipodfniohiuohouhovreddfrgteeivbrwvuerihnahuoeowhgorhouehourhouehporviorehiojgioergreiogibdbbrebeoij'}, 
    {title: 'Favorites', description: 'descipodfniohiuohouhooij'}, 
    {title: 'title', description: 'descipodfniohiuohouhooij'}, 
    {title: 'title', description: 'descipodfniohiuohouhooij'}, 
    {title: 'title', description: 'descipodfniohiuohouhooij'}, 
];

const renderItem = ({item}: {item: any}) => (<Channel title={item.title} description={item.description} />);

export default function Channels () {
    return(
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>New Channel</Text>
            </Pressable>

            <FlatList contentContainerStyle={styles.scroll} data={data} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    button: {
        height: '16%',
        width: '80%',
        borderRadius: 8,
        borderWidth:2,
        borderColor: COLORS.postBorder,
        alignSelf: 'center',
        marginVertical: 18,
        backgroundColor: COLORS.lightGrey,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20
    },
    scroll: {
        alignItems: 'stretch'
    }
});