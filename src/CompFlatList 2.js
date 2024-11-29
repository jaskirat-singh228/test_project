import { FlatList, StyleSheet, Text } from 'react-native'
import React from 'react'

const CompFlatList = () => {
  const freindList = [
    { name: 'Freind #1' },
    { name: 'Freind #2' },
    { name: 'Freind #3' },
    { name: 'Freind #4' },
    { name: 'Freind #5' },
    { name: 'Freind #6' },
    { name: 'Freind #7' },
    { name: 'Freind #8' },
    { name: 'Freind #9' },
    { name: 'Freind #10' }
  ]
  return (
    <FlatList
      // horizontal={true} //or flase
      // showsHorizontalScrollIndicator={true} //or false
      showsVerticalScrollIndicator={true} //or false
      data={freindList}
      renderItem={({ item }) => {
       <Text style={styles.textStyle}>{item.name}</Text>
      }}
       keyExtractor={(item) => {
       item.name
      }}
    />
    
  )
}

export default CompFlatList

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 50
  }
})