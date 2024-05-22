import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Pressable, Text, Image } from "react-native";
import { getUserChannels } from "../../HTTP Requests/channel";
import { ChannelType } from '../../types'
import Channel from "../Channel/Channel";

const PLUS = require('../../../assets/NEW_POST_IMAGE.png');

const renderItem = ({ item }: { item: any }) => (<Channel title={item.title} />);

export default function Channels() {
    const [channels, setChannels] = useState<Array<ChannelType>>([]);

    useEffect(
        () => {
            getUserChannels()
                .then((channels) => setChannels(channels))
                .catch((e) => console.log(e));
        },
        []
    );

    function newChannelhandler () {
        
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={newChannelhandler}>
                <Image style={styles.newChannelIcon} source={PLUS} />
                <Text style={styles.buttonText}>New Channel</Text>
            </Pressable>

            <FlatList contentContainerStyle={styles.scroll} data={channels} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    button: {
        width: '80%',
        borderRadius: 8,
        alignSelf: 'center',
        paddingVertical: 10,
        marginVertical: 18,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    newChannelIcon: {
        height: 80,
        width: 80
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    scroll: {
        alignItems: 'stretch'
    }
});