import { useRoute } from "@react-navigation/native";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { LogOutHandlerContext } from "../../Contexts/LogoutHandlerContext";

const USER_IMAGE = require("../../../assets/USER_IMAGE.png");

export default function User() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={USER_IMAGE} />

      <Text style={styles.nickname}>Nombre de usuario</Text>
      <LogOutHandlerContext.Consumer>
        {(logoutHandler) => (
          <Pressable
            onPress={logoutHandler}
            style={[styles.logoutButton, styles.formButton]}
          >
            <Text style={styles.loginButtonText}>Logout</Text>
          </Pressable>
        )}
      </LogOutHandlerContext.Consumer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 128,
    height: 128,
    marginTop: 24,
    marginBottom: 24,
  },
  nickname: {
    fontSize: 26,
    fontWeight: "bold",
  },
  formButton: {
    borderRadius: 8,
    flexGrow: 1,
    paddingVertical: 6,
    padding: 8,
  },
  logoutButton: {
    backgroundColor: "#FFE9E9",
  },
  loginButtonText: {
    color: "#FF0000",
    textAlign: "center",
    fontSize: 20,
  },
});
