import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explorer from '../Explorer/Explorer';
import NewPost from '../NewPost/NewPost';
import Channels from '../Channels/Channels';
import Channel from '../Channel/Channel';
import PostList from '../PostList/PostList';
import Post from '../Post/Post';
import Ingredient from '../PostForm/Ingredient';
import UserCollapsed from '../UserCollapsed/UserCollapsed';

const ICONS = {
    Explorer: require('../../../assets/EXPLORER_IMAGE.png'),
    NewPost: require('../../../assets/NEW_POST_IMAGE.png'),
    Channels: require('../../../assets/LIBRARY_IMAGE.png')
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
        />
        <Stack.Screen
          name="Post"
          component={Post}
        />
      </Stack.Navigator>
        </NavigationContainer>
    );
}

function TabNavigator(){
    return(<Tab.Navigator
        initialRouteName='Explorer'
        screenOptions={({ route }) => ({
            tabBarIcon: () => {
                return (
                    <Image style={styles.image} source={ICONS[route.name]} />
                );
            },
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
        })}
    >
        <Tab.Screen name='Explorer' component={Explorer} />
        <Tab.Screen name='NewPost' component={NewPost} />
        <Tab.Screen name='Channels' component={Channels} />
    </Tab.Navigator>)
}

const styles = StyleSheet.create({
    image: {
        height: 38,
        width: 38
    }
});