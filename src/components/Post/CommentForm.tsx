/* import { useState } from "react"
import { Pressable, TextInput, View, Text } from "react-native"

export default function CommentForm({post_id}){
    const [commentName,setCommentName] = useState('')
    function createCommentHandler(){
        commentPost(commentName)
        .then((message)=>{
            console.log(message)
            setCommenting(false)
        })
        
    }
    return(
        <View>
            <Text>New comment:</Text>
            <TextInput
                style={styles.input}
                value={commentName}
                onChangeText={setCommentName}
            />
            <Pressable onPress={createCommentHandler}>
                <Text>Submit Comment</Text>
            </Pressable>
        </View>
    )
} */