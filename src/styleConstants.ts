import { StyleSheet } from 'react-native';
import { RecipeType } from './types';

export const COLORS = { lightOrange: '#ffeccc', lightGrey: '#dddddd', lighterGray: '#eeeeee', lightestGrey: '#f5f5f5', postBorder: 'rgba(0, 0, 0, 0.33)' };

export const INITIAL_FORMS = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 128,
        height: 128
    },
    title: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    },
    form: {
        marginTop: 12,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: COLORS.lightOrange
    },
    input: {
        height: 40,
        width: 240,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 8,
        marginBottom: 14,
        paddingHorizontal: 8,
        backgroundColor: 'white'
    },
    button: {
        padding: 10,
        marginTop: 6,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'lightblue',
    },
    link: {
        color: 'blue'
    }
});

export const sampleRecipe: RecipeType={
    duration:9, 
    difficulty:'medio', 
    quantity:3,
    recipe_ingredients: [{
        ingredient:{
            ingredient_id:1,
            name: 'Tomato'
        },
        measurement:{
            measurement_id:1,
            name: 'grams'
        },
        quantity:100
    }],
    steps: [
        {
            description:'sample step',
            images: [],
            method: {
                name: 'boiling',
                method_id: 1
            },
            time: 10,
            title: 'samble'
        }
    ]
}