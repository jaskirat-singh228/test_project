import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const PasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text style={styles.textStyle1}>Enter Password:-</Text>
      <TextInput
        style={styles.textInputStayle}
        // autoCapitalize='none' 
        autoCorrect={true} //or false
        value={password}
        onChangeText={(item) => {
          setPassword(item)
        }
        }
      />
      {password.length < 4 ?
        <Text style={styles.textStyle2}>Password must be 4 characters</Text>
        : null
      }
    </View>

  )
}

export default PasswordScreen

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
  }
})