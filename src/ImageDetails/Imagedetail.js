import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Imagedetail = ({ navigation, imageSource, title, imageScore }) => { //or props={imageSource, title, imageScore}
  // const navigation = useNavigation()
  return (
    <View>
      {/* <Text>Show image of Forest</Text> */}
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score:{imageScore}</Text>

    </View>
  )
}

export default Imagedetail

const styles = StyleSheet.create({})