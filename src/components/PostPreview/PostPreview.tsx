import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { COLORS } from '../../styleConstants';

const USER_IMAGE = require('../../../assets/USER_IMAGE.png');
const DOWN_ARROW_IMAGE = require('../../../assets/DOWN_ARROW_IMAGE.png');
const UP_ARROW_IMAGE = require('../../../assets/UP_ARROW_IMAGE.png');

export default function PostPreview({ id, title, description, userName, score, viewHandler }: { id: number, title: string, description: string, userName: string, score: number, viewHandler: () => void }) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.body} onPress={viewHandler}>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.description}>
                    <Text>{description}</Text>
                </View>
            </Pressable>

            <View style={styles.footer}>
                <Pressable style={styles.user}>
                    <Image style={styles.image} source={USER_IMAGE} />
                    <Text style={styles.userName}>{userName}</Text>
                </Pressable>

                <View style={styles.score}>
                    <Pressable>
                        <Image style={styles.image} source={UP_ARROW_IMAGE} />
                    </Pressable>

                    <Text style={styles.scoreText}>{score}</Text>

                    <Pressable>
                        <Image style={styles.image} source={DOWN_ARROW_IMAGE} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.postBorder,
        paddingVertical: 8,
        paddingHorizontal: '6%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    body: {
        width: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    description: {
        width: '100%',
        borderRadius: 8,
        padding: 8,
        marginTop: 10,
        marginBottom: 14,
        backgroundColor: COLORS.lightGrey
    },
    footer: {
        width: '100%',
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