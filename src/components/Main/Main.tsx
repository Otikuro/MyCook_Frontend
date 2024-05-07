import { useState } from 'react';
import { View, StyleSheet, Text , ScrollView } from 'react-native';
import Header from '../Header/Header';
import Searcher from '../Searcher/Searcher';
import Selector from '../Selector/Selector';
import Explorer from '../Explorer/Explorer';
import NewPost from '../NewPost/NewPost';
import Library from '../Library/Library';
import Navigation from '../Navigation/Navigation';
import Post from '../Post/Post';

export default function Main ({logoutHandler}: {logoutHandler: () => void}) {
    const [tab, setTab] = useState('Explorer');
    const [selected, setSelected] = useState('Posts');

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
                <Explorer></Explorer> 
            )}

            { tab === 'NewPost' && (
                <NewPost></NewPost>   
            )}

            { tab === 'Library' && (
            <>
                <Library /> 
            </>
            )}

            <View style={styles.navigation}>
                <Navigation navigationHandler={navigationHandler}></Navigation>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'column',
       height: '100%'
    },
    navigation: {
        height: '6%',
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});