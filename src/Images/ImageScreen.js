import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Imagedetail from '../ImageDetails/Imagedetail'

const ImageScreen = ({ navigation, imageSource, title, imageScore }) => { //or (props)
  // console.log('props') //check for working of ImageScreen function
  return (
    <View>
      <Imagedetail
        title='Forest'
        imageScore={8}
        imageSource={require('../Images/forest.jpg')}
      />
      <Imagedetail
        title='Beach'
        imageScore={9}
        imageSource={require('../Images/beach.jpg')}
      />
      <Imagedetail
        title='Mountain'
        imageScore={10}
        imageSource={require('../Images/mountain.jpg')}
      />
    </View>
  )
}

export default ImageScreen

