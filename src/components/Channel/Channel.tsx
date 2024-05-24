import { Text, StyleSheet, Pressable } from "react-native";
import Navigation from "../Navigation/Navigation";
import { useNavigation, useRoute } from '@react-navigation/native';
import { getPostsFromChannel } from "../../HTTP Requests/channel";
import { ChannelType } from "../../types";

export default function Channel ({channel}: {channel: ChannelType}) {
    const navigation = useNavigation();
    const route = useRoute();
    if (route.params && route.params.channel) {
        channel = route.params.channel;
      }
    return(
        //@ts-ignore
        <Pressable style={styles.container} onPress={()=>getPostsFromChannel(channel.channel_id).then(posts=>{navigation.navigate('Channel', {posts: posts})})}>
            <Text style={styles.title}>{channel.name}</Text>
            {/* <Text>{description}</Text> */}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
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