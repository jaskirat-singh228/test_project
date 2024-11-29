import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React, { useState, useReducer } from 'react'
import ColorCounter from '../ColorCounter'

const colorIncrement = 15

initialState = { red: 0, green: 0, blue: 0 }
const reducer = (state, action) => {
  const { red, green, blue } = state

  // switch (action.type) {
  //   case 'red':
  //     return { ...state, red: state.red + action.amount }
  //   case 'green':
  //     return { ...state, green: state.green + action.amount }
  //   case 'blue':
  //     return { ...state, blue: state.blue + action.amount }
  //   default:
  //     state
  // }

  //or
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }

    default:
      state
  }
}

const ReducerSquareScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // const setColor = (color, change) => {
  //   switch (color) {
  //     case 'red':
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change)
  //     case 'green':
  //       green + change > 255 || green + change < 0 ? null : setGreen(green + change)

  //     case 'blue':
  //       blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
  // default:
  //   return
  //   }
  // }
  // const [red, setRed] = useState(0)
  // const [green, setGreen] = useState(0)
  // const [blue, setBlue] = useState(0)
  return (
    <View style={{ alignItems: 'center' }}>
      <ColorCounter
        onIncrease={() => {
          // setColor('red', colorIncrement)
          dispatch({ type: 'change_red', payload: colorIncrement })
        }}

        onDecrease={() => {
          // setColor('red', -1 * colorIncrement)
          dispatch({ type: 'change_red', payload: -1 * colorIncrement })

        }}
        color='Red' />

      <ColorCounter
        onIncrease={() => {
          // setColor('green', colorIncrement)
          dispatch({ type: 'change_green', payload: colorIncrement })

        }}
        onDecrease={() => {
          // setColor('green', -1 * colorIncrement)
          dispatch({ type: 'change_green', payload: -1 * colorIncrement })

        }}
        color='Green' />

      <ColorCounter
        onIncrease={() => {
          // setColor('blue', colorIncrement)
          dispatch({ type: 'change_blue', payload: colorIncrement })

        }}
        onDecrease={() => {
          dispatch({ type: 'change_blue', payload: -1 * colorIncrement })
        }}
        color='Blue' />

      <View style={{
        height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})`, marginTop: 20,//`rgb(${red},${green},${blue})`, marginTop: 20,
        borderWidth: 3, borderColor: 'lightgreen', borderRadius: 20
      }}>
      </View>
    </View>
  )
}

export default ReducerSquareScreen

const styles = StyleSheet.create({
  nextButtonStyle: {
    backgroundColor: "blue",
    padding: 5,
    alignItems: "center",
    marginVertical: 20,
    borderWidth: 5,
    borderColor: "yellow",
  },
  nextButtonTextStyle: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    padding: 5,
    marginHorizontal: 30,
  },
  withreducerButtonStyle: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    marginVertical: 20,
    borderWidth: 5,
    borderColor: "yellow",
  },
  withreducerButtonTextStyle: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    padding: 10
  }
})