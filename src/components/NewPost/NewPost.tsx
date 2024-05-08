import { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import Selector from "../Selector/Selector";
import PostForm from "../PostForm/PostForm";
import RecipeForm from "../RecipeForm/RecipeForm";

export default function NewPost(){
    const [selected, setSelected] = useState(false);

    function selectorHandler () {
        setSelected(previous => !previous);
    }

    return (
        <View style={styles.container}>
            <Selector type={'Post'} selected={selected} selectorHandler={selectorHandler}/>

            {!selected ?
                <PostForm/>
            :
                <RecipeForm/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '88%'
    }
});