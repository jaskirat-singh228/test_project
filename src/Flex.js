import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.viewOne}></View>
      <View style={styles.viewTwoPerent}>
        <View style={styles.viewTwo}></View>
      </View>
      <View style={styles.viewThree}></View>
    </View>
  )
}

export default Flex

const styles = StyleSheet.create({
  mainView: {
    height: 300,
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOne: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  viewTwo: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    // alignSelf: 'flex-end'
  },
  viewTwoPerent: {
    height: 200,
    justifyContent: 'flex-end'
  },
  viewThree: {
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  }
})