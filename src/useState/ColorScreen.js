import { StyleSheet, Text, View, TouchableOpacity, FlatList, navigation } from 'react-native'
import React, { useState } from 'react'

const ColorScreen = ({ navigation }) => {
    const [colors, setColors] = useState([])
    return (
        <View style={{ alignItems: "center", flex: 1, marginBottom: 80 }}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            >

                <Text style={styles.buttonTextStyle}>Add a Color</Text>
            </TouchableOpacity>
            {/* <View style={{ height: 200, width: 200, borderRadius: 100, borderColor: 'black', backgroundColor: randomRgb(), borderWidth: 5 }}/> */}


            <FlatList
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, borderRadius: 20, borderColor: 'black', backgroundColor: item, borderWidth: 5 }} />
                    )
                }}
                keyExtractor={(item) => item}
            />
            <TouchableOpacity style={styles.nextButtonStyle}
                onPress={() => {
                    navigation.navigate("SquareScreen")
                }}
            >
                <Text style={styles.nextButtonTextStyle}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}
export default ColorScreen

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,
        margin: 15,
        backgroundColor: 'yellow',
        borderWidth: 5,
        borderRadius: 20

    },
    buttonTextStyle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    nextButtonStyle: {
        backgroundColor: "blue",
        padding: 10,
        alignItems: "center",
        borderWidth: 5,
        borderColor: "yellow",
    },
    nextButtonTextStyle: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        marginHorizontal: 30
    }
})