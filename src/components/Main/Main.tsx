import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Header from '../Header/Header';
import User from '../User/User';
import Explorer from '../Explorer/Explorer';
import NewPost from '../NewPost/NewPost';
import Library from '../Library/Library';
import Navigation from '../Navigation/Navigation';

export default function Main({ logoutHandler }: { logoutHandler: () => void }) {
    const [view, setView] = useState('Explorer');

    function viewHandler(selectedView: string) {
        setView(selectedView);
    }

    return (
        <View style={styles.container}>
            <Header viewHandler={viewHandler} />

            {view === 'User' ?
                <User logoutHandler={logoutHandler} />
                :
                <>
                    {view === 'Explorer' && (<Explorer />)}
                    {view === 'NewPost' && (<NewPost />)}
                    {view === 'Library' && (<Library />)}

                    <Navigation viewHandler={viewHandler} />
                </>
            }
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