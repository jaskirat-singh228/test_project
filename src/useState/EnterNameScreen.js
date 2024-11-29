import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TextInputScreen = ({ navigation }) => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text style={styles.textStyle1}>Enter Name:-</Text>
      <TextInput
        style={styles.textInputStayle}
        // autoCapitalize='none' 
        autoCorrect={true} //or false
        value={name}
        onChangeText={(item) => {
          setName(item)
        }
        }

      />
      <Text style={styles.textStyle2}>Your name is:- {name}</Text>
      <TouchableOpacity style={styles.nextButtonStyle}
        onPress={() => {
          navigation.navigate('PasswordScreen')
        }}
      >
        <Text style={styles.nextButtonTextStyle}>Next</Text>
      </TouchableOpacity>
    </View>

  )
}

export default TextInputScreen

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 40,
    margin: 20,
    fontWeight: 'bold'
  },
  textInputStayle: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  textStyle2: {
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 50,
    fontWeight: 'bold'
  },
  nextButtonStyle: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderWidth: 5,
    borderColor: "yellow",
    margin: 110,
    marginVertical: 180
  },
  nextButtonTextStyle: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 20
  }
})