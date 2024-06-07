import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

const LOGO_IMAGE = require("../../../assets/LOGO_IMAGE.png");
const USER_IMAGE = require("../../../assets/USER_IMAGE.png");

// Componente funcional Header
export default function Header() {
  const navigation = useNavigation(); // Uso del hook useNavigation para obtener la instancia de navegación

  // Función para navegar a la pantalla de exploración
  function goExplore() {
    navigation.reset({
      // Reinicia el stack de navegación
      index: 0,
      routes: [{ name: "Explorer" }],
    });
    navigation.navigate("Explorer"); // Navega a la pantalla de exploración
    console.log("explore");
  }

  return (
    <View style={styles.container}>
      {/* Botón para ir a la pantalla de exploración */}
      <Pressable onPress={goExplore}>
        <Image style={styles.image} source={LOGO_IMAGE} />
      </Pressable>

      {/* Botón para ir a la pantalla de exploración */}
      <Pressable onPress={goExplore}>
        <Text style={styles.title}>MyCook</Text>
      </Pressable>

      {/* Botón para ir a la pantalla de usuario */}
      {/* @ts-ignore */}
      <Pressable onPress={() => navigation.navigate("User")}>
        <Image style={styles.image} source={USER_IMAGE} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 38,
    height: 38,
    marginRight: 8,
    marginLeft: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
