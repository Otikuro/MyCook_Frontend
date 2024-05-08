import { View, Text, Image, StyleSheet } from "react-native";

const USER_IMAGE = require('../../../assets/USER_IMAGE.png');
const DOWN_ARROW_IMAGE = require('../../../assets/DOWN_ARROW_IMAGE.png');
const UP_ARROW_IMAGE = require('../../../assets/UP_ARROW_IMAGE.png');

export default function Post ({title, description, userName, score}: {title: string, description: string, userName: string, score: number}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.description}>
                <Text>{description}</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.user}>
                    <Image style={styles.image} source={USER_IMAGE}/>
                    <Text style={styles.userName}>{userName}</Text>
                </View>

                <View style={styles.score}>
                    <Image style={styles.image} source={UP_ARROW_IMAGE}/>
                    <Text style={styles.scoreText}>{score}</Text>
                    <Image style={styles.image} source={DOWN_ARROW_IMAGE}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.33)',
        padding: 8,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    description: {
        width: '94%',
        borderRadius: 8,
        padding: 8,
        marginTop: 10,
        marginBottom: 14,
        backgroundColor: '#dddddd'
    },
    footer: {
        width: '94%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        marginLeft: 8,
        fontSize: 18
    },
    score: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scoreText: {
        fontSize: 18,
        marginLeft: 4,
        marginRight: 4,
        fontWeight: 'bold'
    },
    image: {
        width: 30,
        height: 30
    }
});