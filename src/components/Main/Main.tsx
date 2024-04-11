import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Header/Header';
import Explore from '../Explore/Explore';
import NewPost from '../NewPost/NewPost';
import Library from '../Library/Library';
import Navigation from '../Navigation/Navigation';
import RecipeForm from '../RecipeForm/RecipeForm';

export default function Main ({logoutHandler}: {logoutHandler: () => void}) {
    const [tab, setTab] = useState('Explore');
    
    return(
        <View style={styles.container}>
            <Header logoutHandler={logoutHandler} />

            <RecipeForm></RecipeForm>

            <Navigation></Navigation>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'column'
    }
});