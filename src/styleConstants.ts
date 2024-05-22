import { StyleSheet } from 'react-native';

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