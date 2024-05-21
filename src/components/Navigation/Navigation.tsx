import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explorer from '../Explorer/Explorer';
import NewPost from '../NewPost/NewPost';
import Channels from '../Channels/Channels';

const ICONS = {
    Explorer: require('../../../assets/EXPLORER_IMAGE.png'),
    NewPost: require('../../../assets/NEW_POST_IMAGE.png'),
    Channels: require('../../../assets/LIBRARY_IMAGE.png')
};

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
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
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 38,
        width: 38
    }
});