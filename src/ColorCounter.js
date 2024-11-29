import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={{ alignItems: "center", alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-start' }}>
            <Text style={styles.textStyle}>{color}</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    onIncrease()
                }}
            >
                <Text style={styles.buttonTextStyle}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    onDecrease()
                }}>
                <Text style={styles.buttonTextStyle}>Decrease</Text>

            </TouchableOpacity>
        </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: 'yellow',
        padding: 15,
        borderWidth: 3,
        margin: 15
    },
    buttonTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})