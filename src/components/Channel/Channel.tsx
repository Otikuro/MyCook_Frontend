import { Text, StyleSheet, Pressable } from "react-native";
import Navigation from "../Navigation/Navigation";
import { useNavigation, useRoute } from '@react-navigation/native';
import { getPostsFromChannel, joinChannel } from "../../HTTP Requests/channel";
import { ChannelType } from "../../types";
import { useState } from "react";

export default function Channel({ channel }: { channel: ChannelType }) {
    const navigation = useNavigation();
    const route = useRoute();

    const [joinable, setJoinable] = useState(channel.amIMember!=undefined && !channel.amIMember)
    if (route.params && route.params.channel) {
        channel = route.params.channel;
    }
    function join(id){
        joinChannel(id)
        setJoinable(false)
    }

    return (
        //@ts-ignore
        <Pressable style={styles.container} onPress={() => getPostsFromChannel(channel.channel_id).then(posts => { navigation.navigate('Channel', { posts: posts }) })}>
            <Text style={styles.title}>{channel.name}</Text>
            {joinable && <Pressable onPress={()=>join(channel.channel_id)}><Text style={[styles.button, styles.join]}>Join</Text></Pressable>}
            {!joinable && <Text style={[styles.button, styles.joined]}>Joined</Text>}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
  button: {
    textAlign: 'center',
    borderRadius: 8,
    width: 100,
    padding: 6,
  },
  join:{
    backgroundColor: "#FFAE27",
  },
  joined:{
    backgroundColor: 'lightgreen'
  }
});