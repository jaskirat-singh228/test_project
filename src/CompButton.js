import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CompButton = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyle}>Button</Text>
            <Button
                title='Go to FlatList'
                onPress={() => {
                    navigation.navigate('CompFlatList')
                }}
            />
            <Text style={styles.touchTextStyle}>TouchableOpacity</Text>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    navigation.navigate('CompFlatList')

                }}
            >
                <Text style={styles.buttonTextStyle}>Go to TaskFlatList</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CompButton

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 30
    },
    buttonStyle: {
        backgroundColor: 'skyblue',
        margin: 70,
        padding: 10,
        borderWidth: 5,
        marginTop: 20
    },
    buttonTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    touchTextStyle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 60
    }
})