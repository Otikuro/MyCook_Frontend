import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Selector () {
    return (
        <>
            <Pressable>
                <Text>Recipes</Text>
            </Pressable>

            <Pressable>
                <Text>Channels</Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
});