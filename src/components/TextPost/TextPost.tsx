import { View,Text , StyleSheet, Pressable } from "react-native";
import { PostType } from "../../types";
import { COLORS } from "../../styleConstants";

export default function TextPost(post: PostType){
    return(
        <View style={styles.post}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{post.title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>{post.body}</Text>
            </View>
            <View style={styles.footer}>
{/*                 <View style={styles.userData}>
                    <Text>{post.user.username}</Text>
                </View> */}
                <View style={styles.votes}>
                    <Pressable>A</Pressable>
                    <Text>{post.votes}</Text>
                    <Pressable>V</Pressable>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    post:{
        maxWidth: '100%'
    },
    title:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    titleText:{
        fontSize: 20,
    },
    body:{
        padding: 16
    },
    bodyText:{
        padding: 8,
        borderRadius: 8,
        backgroundColor: COLORS.lighterGray
    },
    footer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    userData:{

    },
    votes:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});