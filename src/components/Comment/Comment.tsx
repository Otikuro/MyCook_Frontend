import { View, Text, StyleSheet } from "react-native";
import { CommentType } from "../../types";
import UserCollapsed from "../UserCollapsed/UserCollapsed";
import { COLORS } from "../../styleConstants";

export default function Comment({body, date, user}: CommentType){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <UserCollapsed name={user.name} profilePic={user.profilePic}/>
                <Text>{date}</Text>
            </View>
            <Text style={styles.body}>{body}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        borderWidth: 1,
        borderColor: 'black',
        padding: 8
    },body: {
        width: "100%",
        borderRadius: 8,
        padding: 8,
        marginTop: 10,
        marginBottom: 14,
        backgroundColor: COLORS.lightGrey,
      },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})