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

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Channel"
          component={PostList}
          options={({ route }) => ({
            headerTitle: (route.params as { channel: ChannelType }).channel
              .name,
            headerRight: () => (
              <View style={{ padding: 8 }}>
                <JoinButton />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{
            headerRight: () => <PostOptions />,
          }}
        />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="PostForm" component={PostForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator({ logoutHandler }: { logoutHandler: () => void }) {
  return (
    <Tab.Navigator
      initialRouteName="Explorer"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          return <Image style={styles.image} source={ICONS[route.name]} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        header: Header,
      })}
    >
      <Tab.Screen name="Explorer" component={Explorer} />
      <Tab.Screen name="NewPost" component={NewPost} />
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
