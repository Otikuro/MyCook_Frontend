import { Image, StyleSheet, View } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explorer from "../Explorer/Explorer";
import NewPost from "../NewPost/NewPost";
import Channels from "../Channels/Channels";
import Channel, { JoinButton } from "../Channel/Channel";
import PostList from "../PostList/PostList";
import Post from "../Post/Post";
import Ingredient from "../PostForm/Ingredient";
import UserCollapsed from "../UserCollapsed/UserCollapsed";
import User from "../User/User";
import Header from "../Header/Header";
import PostOptions from "../Post/PostOptions";
import PostForm from "../PostForm/PostForm";
import { ChannelType } from "../../types";

const ICONS = {
  Explorer: require("../../../assets/EXPLORER_IMAGE.png"),
  NewPost: require("../../../assets/NEW_POST_IMAGE.png"),
  Channels: require("../../../assets/LIBRARY_IMAGE.png"),
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Componente funcional Navigation
export default function Navigation() {
  return (
    <NavigationContainer>
      {/* Navegador de pilas */}
      <Stack.Navigator>
        {/* Pantalla principal con pestañas */}
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }} // Oculta la barra de navegación en esta pantalla
        />
        {/* Pantalla de canal */}
        <Stack.Screen
          name="Channel"
          component={PostList} // Lista de publicaciones
          options={({ route }) => ({
            headerTitle: (route.params as { channel: ChannelType }).channel
              .name, // Título de la pantalla basado en el nombre del canal
            headerRight: () => ( // Componente de botón derecho en la barra de navegación
              <View style={{ padding: 8 }}>
                <JoinButton /> {/* Botón de unirse al canal */}
              </View>
            ),
          })}
        />
        {/* Pantalla de publicación */}
        <Stack.Screen
          name="Post"
          component={Post} // Detalles de la publicación
          options={{
            headerRight: () => <PostOptions />, // Componente de opciones de la publicación en la barra de navegación
          }}
        />
        {/* Pantalla de usuario */}
        <Stack.Screen name="User" component={User} />
        {/* Pantalla de formulario de publicación */}
        <Stack.Screen name="PostForm" component={PostForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Componente funcional TabNavigator para las pestañas de la aplicación
function TabNavigator({ logoutHandler }: { logoutHandler: () => void }) {
  return (
    <Tab.Navigator
      initialRouteName="Explorer" // Ruta inicial
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          return <Image style={styles.image} source={ICONS[route.name]} />; // Icono de la pestaña
        },
        tabBarHideOnKeyboard: true, // Ocultar la barra de pestañas cuando el teclado está activo
        tabBarShowLabel: false, // No mostrar etiquetas de pestañas
        header: Header, // Componente de encabezado personalizado
      })}
    >
      {/* Pestaña de exploración */}
      <Tab.Screen name="Explorer" component={Explorer} />
      {/* Pestaña de nueva publicación */}
      <Tab.Screen name="NewPost" component={NewPost} />
      {/* Pestaña de canales */}
      <Tab.Screen name="Channels" component={Channels} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  image: {
    height: 38,
    width: 38,
  },
});
