import { Pressable, Image, Text, StyleSheet } from "react-native";
import { UserType } from "../../types";

export default function UserCollapsed({profilePic, name}:UserType){
    return(
        <Pressable style={styles.user}>
          {profilePic && <Image style={styles.iconImage} source={{uri: profilePic.url}} />}
          <Text style={styles.userName}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    user: {
      flexDirection: "row",
      alignItems: "center",
    },
    userName: {
      marginLeft: 8,
      fontSize: 18,
    },
    iconImage: {
      width: 30,
      height: 30,
    },
  });