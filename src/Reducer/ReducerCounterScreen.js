import { StyleSheet, Text, View, TouchableOpacity, navigation } from 'react-native'
import React, { useState, useReducer } from 'react'

const initialState = {
  count: 0
}
const reducer = (state, action) => {
  // console.log(state, action)
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    // console.log(state.count + 1)

    case 'decrement':
      return { ...state, count: state.count - 1 }
    // console.log(state.count - 1)

    default: state;
  }
}
const ReducerCounterScreen = ({ navigation }) => {
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <View>
      <Text style={styles.textStyle}>Current Counter: {state.count}</Text>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => {
          // setCounter(counter + 1)
          dispatch({ type: 'increment' })
        }}
      >
        <Text style={styles.buttonTextStyle}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => {
          // setCounter(counter - 1)
          dispatch({ type: 'decrement' })
        }}
      >
        <Text style={styles.buttonTextStyle}>Decrease</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButtonStyle}
        onPress={() => {
          navigation.navigate('ReducerSquareScreen')
        }}
      >
        <Text style={styles.nextButtonTextStyle}>Next</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ReducerCounterScreen

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
    borderWidth: 5,
    borderColor: "yellow",
    marginVertical: 20,
    marginHorizontal: 110

  },
  nextButtonTextStyle: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  }
})