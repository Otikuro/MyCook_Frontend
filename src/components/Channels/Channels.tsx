import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Pressable, Text, Image, TextInput } from "react-native";
import { createChannel, getUserChannels } from "../../HTTP Requests/channel";
import { ChannelType } from '../../types'
import Channel from "../Channel/Channel";
import { getLikedBy, getPostedBy } from "../../HTTP Requests/post";
import { useNavigation } from "@react-navigation/native";

const PLUS = require('../../../assets/NEW_POST_IMAGE.png');

const renderItem = ({ item }: { item: any }) => (<Channel channel={item} />);

export default function Channels() {
    const navigation = useNavigation();

    const [channels, setChannels] = useState<Array<ChannelType>>([]);
    const [creatingChannel, setCreatingChannel] = useState<boolean>(false);

    function reloadChannels() {
        getUserChannels()
            .then((channels) => setChannels(channels))
    }

    useEffect(() => {
        reloadChannels()
    }, [creatingChannel])


    function newChannelhandler() {
        setCreatingChannel(true)
    }

    return (
        <View style={styles.container}>
            {creatingChannel && <NewChannelForm setCreatingChannel={setCreatingChannel} />}
            {!creatingChannel && <Pressable style={styles.button} onPress={newChannelhandler}>
                <Image style={styles.newChannelIcon} source={PLUS} />
                <Text style={styles.buttonText}>New Channel</Text>
            </Pressable>}
            <Pressable style={styles.channelContainer} onPress={() => getPostedBy().then(posts => { console.log(posts);navigation.navigate('Channel', { posts: posts }) })}>
                <Text style={styles.title}>My Posts</Text>
            </Pressable>
            <Pressable style={styles.channelContainer} onPress={() => getLikedBy().then(posts => { navigation.navigate('Channel', { posts: posts }) })}>
                <Text style={styles.title}>My Liked Posts</Text>
            </Pressable>

            <FlatList contentContainerStyle={styles.scroll} data={channels} renderItem={renderItem} />
        </View>
    );
}

function NewChannelForm({ setCreatingChannel }) {
    const [channelName, setChannelName] = useState('')
    function createChannelHandler() {
        createChannel(channelName)
            .then((message) => {
                console.log(message)
                setCreatingChannel(false)
            })

    }
    return (
        <View>
            <Text>New channel name:</Text>
            <TextInput
                style={styles.input}
                value={channelName}
                onChangeText={setChannelName}
            />
            <Pressable onPress={createChannelHandler}>
                <Text>Create Channel</Text>
            </Pressable>
        </View>
    )
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
    },
    input: {
        width: "100%",
        borderRadius: 8,
        marginVertical: 8,
        backgroundColor: "#ffffff",
    },
    channelContainer: {
        borderWidth: 1,
        borderColor: '#000000',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});