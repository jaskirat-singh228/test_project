import { StyleSheet, Text, View, TouchableOpacity, navigation } from 'react-native'
import React, { useState } from 'react'
const CounterSrceen = ({ navigation }) => {
  const [counter, setCounter] = useState(0)
  return (
    <View>
      <Text style={styles.textStyle}>Current Counter: {counter}</Text>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => {
          setCounter(counter + 1)
        }}
      >
        <Text style={styles.buttonTextStyle}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => {
          setCounter(counter - 1)
        }}
      >
        <Text style={styles.buttonTextStyle}>Decrease</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButtonStyle}
        onPress={() => {
          navigation.navigate('ColorScreen')
        }}
      >
        <Text style={styles.nextButtonTextStyle}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.withreducerButtonStyle}
        onPress={() => {
          navigation.navigate('ReducerCounterScreen')
        }}
      >
        <Text style={styles.withreducerButtonTextStyle}>With Reducer ➠</Text>
      </TouchableOpacity>

    </View>
  )
}

export default CounterSrceen

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "green",
    margin: 8,
    borderWidth: 5,
    borderRadius: 50

  },
  buttonTextStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "yellow"
  },
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 100
  },
  nextButtonStyle: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
    marginHorizontal: 110,
    borderWidth: 5,
    borderColor: "yellow",

  },
  nextButtonTextStyle: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"

  },
  withreducerButtonStyle: {
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    marginHorizontal: 70,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 15
  },
  withreducerButtonTextStyle: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    marginVertical: 5

  }

})