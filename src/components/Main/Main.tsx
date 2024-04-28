import { useState } from 'react';
import { View, StyleSheet, Text , ScrollView } from 'react-native';
import Header from '../Header/Header';
import Searcher from '../Searcher/Searcher';
import Selector from '../Selector/Selector';
import Explorer from '../Explorer/Explorer';
import NewPost from '../NewPost/NewPost';
import Library from '../Library/Library';
import Navigation from '../Navigation/Navigation';

export default function Main ({logoutHandler}: {logoutHandler: () => void}) {
    const [selected, setSelected] = useState('Posts');
    const [tab, setTab] = useState('Explorer');

    function selectorHandler (selectedSelector: string) {
        setSelected(selectedSelector);
    }

    function navigationHandler (selectedTab: string) {
        setTab(selectedTab);
    }
    
    return(
        <View style={styles.container}>
            <Header logoutHandler={logoutHandler} />

            { tab === 'Explorer' && (
            <>
                <View style={styles.searcher}>
                    <Searcher />
                </View>
                <View style={styles.selector}>
                    <Selector selectorHandler={selectorHandler} />
                </View>
{/*                 /* 
                    <ScrollView>
                        <Explorer></Explorer> 
                    </ScrollView>   */ }
            </>
            )}

            { tab === 'NewPost' && (
                <NewPost></NewPost>   
            )}

            { tab === 'Library' && (
            <>
                <View style={styles.selector}>
                    <Selector selectorHandler={selectorHandler} />
                </View>

{/*                 <ScrollView>
                    <Library></Library> 
                </ScrollView>  */}
            </>
            )}

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
    searcher: {
        height: '6%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        top: '9%'
    },
    selector: {
        height: '6%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        top: '15%',
        backgroundColor: '#dddddd'
    },
    navigation: {
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});