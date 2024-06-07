import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Pressable, Text, Image, StyleSheet, View } from "react-native";
import { ChannelType } from "../../types";
import { getUserChannels } from "../../HTTP Requests/channel";
import ChannelCollapsed from "../Channel/ChanneCollapsed";
const FILTER_IMAGE = require('../../../assets/FILTER_IMAGE.png');


export default function PostOptions() {
    const route = useRoute();
    const navigation = useNavigation();

    let post_id = 0;

    const [showingMenu, setShowingMenu] = useState<boolean>(false)
    const [showingChannels, setShowingChannels] = useState<boolean>(false)
    const [followedChannels, setFollowedChannels] = useState<Array<ChannelType>>([])

    useEffect(() => {
        getUserChannels()
            .then((channels) => { setFollowedChannels(channels) })
    }, [])

    function handleOptions() {
        if (showingChannels) {
            setShowingChannels(false)
        } else {
            setShowingMenu(!showingMenu)
        }
    }

    function showChannels() {
        setShowingChannels(true)
    }

    function hideAll() {
        setShowingChannels(false)
        setShowingMenu(false)
    }

    function modifyPost() {
        {/* @ts-ignore */ }
        navigation.navigate('PostForm', { post: route.params.post })
    }

    //@ts-ignore
    if (route.params && route.params.post) {
        //@ts-ignore
        post_id = route.params.post.post_id
    }
    return (
        <>
            <Pressable onPress={handleOptions}>
                <Image style={styles.filtersImage} source={FILTER_IMAGE} />
            </Pressable>
            {showingMenu && !showingChannels && <View style={styles.menu}>
                <Pressable style={styles.menuButton} onPress={modifyPost}>
                    <Text style={styles.buttonText}>Modify Post</Text>
                </Pressable>
                <Pressable style={styles.menuButton} onPress={showChannels}>
                    <Text style={styles.buttonText}>Add to channel</Text>
                </Pressable>
            </View>}
            {showingChannels && <View style={styles.menu}>
                {followedChannels.map(channel => (<ChannelCollapsed channel={channel} post_id={post_id} hideChannels={hideAll}/>))}
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    filtersImage: {
        width: 32,
        height: 32
    },
    menu: {
        position: 'absolute',
        top: '100%',
        width: '50%',
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1
    },
    menuButton: {
        height: 32,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        display: 'flex',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center'
    }
});