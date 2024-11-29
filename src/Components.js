import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Components = (props) => {
  const greeting = "Hello World!" //or 123456789; or [123,456,7890]; are same output = 1234567890  smilary-['abc','def']; = abcdef    or   We can't set objects - {car:'BMW'} = gives an error 
  const newGreeting = <Text style={[styles.HelloWorld2Style, { marginTop: 10 }]}>Hello World</Text>
  return (
    <View>
      <Text style={styles.HomeScreenStyle}>HomeScreen</Text>

      <Text style={styles.ComponentsStyle}>Components</Text>
      <Text>A Component is a function that return something called JSX.</Text>
      <Text style={styles.JSXStyle}>JSX</Text>
      <Text style={{ textAlign: "center" }}>JSX is some special syntex that looks kind of like HTML.</Text>

      <Text style={styles.HelloWorld2Style}>{greeting}</Text>
      {newGreeting}
    </View>
  )
}

export default Components

const styles = StyleSheet.create({
  HomeScreenStyle: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20
  },
  ComponentsStyle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20
  },
  JSXStyle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20
  },
  HelloWorld2Style: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
    backgroundColor: 'skyblue'
  }
})