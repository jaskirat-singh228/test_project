import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import ColorCounter from '../ColorCounter'

const colorIncrement = 15

const SquareScreen = ({ navigation }) => {
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)

            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)

        }
    }
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    return (
        <View style={{ alignItems: 'center' }}>
            <ColorCounter
                onIncrease={() => {
                    setColor('red', colorIncrement)
                }}
                onDecrease={() => {
                    setColor('red', -1 * colorIncrement)
                }}
                color='Red' />

            <ColorCounter
                onIncrease={() => {
                    setColor('green', colorIncrement)
                }}
                onDecrease={() => {
                    setColor('green', -1 * colorIncrement)
                }}
                color='Green' />

            <ColorCounter
                onIncrease={() => {
                    setColor('blue', colorIncrement)
                }}
                onDecrease={() => {
                    setColor('blue', -1 * colorIncrement)
                }}

                color='Blue' />

            <View style={{
                height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`, marginTop: 20,
                borderWidth: 3, borderColor: 'lightgreen', borderRadius: 20
            }}>
            </View>

            <TouchableOpacity style={styles.nextButtonStyle}
                onPress={() => {
                    navigation.navigate('TextInputScreen')
                }}
            >
                <Text style={styles.nextButtonTextStyle}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.withreducerButtonStyle, { backgroundColor: "skyblue", marginHorizontal: 30, borderColor: 'black', padding: 2, borderRadius: 10 }]}
                onPress={() => {
                    navigation.navigate('ReducerSquareScreen')
                }}
            >
                <Text style={styles.withreducerButtonTextStyle}>With Reducer ➠</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({
    withreducerButtonStyle: {
        backgroundColor: "skyblue",
        padding: 10,
        alignItems: "center",
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 15
    },
    withreducerButtonTextStyle: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
        margin: 10

    },
    nextButtonStyle: {
        backgroundColor: "blue",
        padding: 5,
        alignItems: "center",
        // marginVertical: 20,
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 5,
        borderColor: "yellow",
    },
    nextButtonTextStyle: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        padding: 5,
        marginHorizontal: 30,
    }
})