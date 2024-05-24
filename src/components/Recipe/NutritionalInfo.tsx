import { View, StyleSheet, Text } from "react-native";
import { NutritionalInfoType } from "../../types";

export default function NutritionalInfo({info}: {info:NutritionalInfoType}){
    return(
        <View style={styles.container}>
            {Object.keys(info).map((row)=>
                {return(
                <View style={styles.row}>
                    <Text>{row}</Text>
                    <Text>{info[row]}</Text>
                </View>);}
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        borderWidth: 1
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        width: '100%',
        padding: 2,
        paddingHorizontal: 4
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '33.3%',
        textAlign:'center',
        color: 'black'
    }
});