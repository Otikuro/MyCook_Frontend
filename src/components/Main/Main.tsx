import { useState } from 'react';
import { View, StyleSheet, Text , ScrollView } from 'react-native';
import Header from '../Header/Header';
import Selector from '../Selector/Selector';
import Explorer from '../Explorer/Explorer';
import NewPost from '../NewPost/NewPost';
import Library from '../Library/Library';
import Navigation from '../Navigation/Navigation';

export default function Main ({logoutHandler}: {logoutHandler: () => void}) {
    const [tab, setTab] = useState('Explorer');

    function navigationHandler (selectedTab: string) {
        setTab(selectedTab);
    }
    
    return(
        <View style={styles.container}>
            <Header logoutHandler={logoutHandler} />

            { tab === 'Explorer' &&
                <View style={styles.selector}>
                    <Selector />
                </View>
                /* 
                    <ScrollView>
                        <Explorer></Explorer> 
                    </ScrollView>   */
            }

            { tab === 'NewPost' &&
                <NewPost></NewPost>   
            }

            { tab === 'Library' &&
                <>
                <Selector />

{/*                 <ScrollView>
                    <Library></Library> 
                </ScrollView>  */}
                </>
            }

            <View style={styles.navigation}>
                <Navigation navigationHandler={navigationHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'column',
       height: '100%',
       justifyContent: 'space-between'
    },
    selector: {
        height: '6%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        top: '9%',
        backgroundColor: '#dddddd'
    },
    navigation: {
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});