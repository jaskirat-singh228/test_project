import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('Components')
                    }}
                >
                    <Text style={styles.buttonTextStyle}>Components ➠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('CompFlatList')
                    }}
                >
                    <Text style={[styles.buttonTextStyle]}>FlatList ➠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('CompButton')
                    }}
                >
                    <Text style={[styles.buttonTextStyle]}>Button ➠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('ImageScreen')
                    }}
                >
                    <Text style={[styles.buttonTextStyle]}>Image ➠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('CounterScreen')
                    }}
                >
                    <Text style={[styles.buttonTextStyle]}>useState ➠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('ReducerCounterScreen')
                    }}
                >
                    <Text style={[styles.buttonTextStyle]}>Reducer ➠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('Flex')
                    }}
                >
                    <Text style={[styles.buttonTextStyle]}>Flex ➠</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "skyblue",
        padding: 10,
        margin: 10,
        borderWidth: 5,
        borderRadius: 20
    },
    buttonTextStyle: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    }
})