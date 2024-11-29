import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import Components from './src/Components';
import CompFlatList from './src/CompFlatList';
import CompButton from './src/CompButton';
import ImageScreen from './src/Images/ImageScreen';
import CounterScreen from './src/useState/CounterSrceen';
import ColorScreen from './src/useState/ColorScreen';
import SquareScreen from './src/useState/SquareScreen';
import ReducerCounterScreen from './src/Reducer/ReducerCounterScreen';
import ReducerSquareScreen from './src/Reducer/RerducerSquareScreen';
import TextInputScreen from './src/useState/EnterNameScreen';
import PasswordScreen from './src/useState/EnterPasswordScreen';
import Flex from './src/Flex';
const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Components" component={Components} />
        <Stack.Screen name="CompFlatList" component={CompFlatList} />
        <Stack.Screen name="CompButton" component={CompButton} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="ReducerCounterScreen" component={ReducerCounterScreen} />
        <Stack.Screen name="ReducerSquareScreen" component={ReducerSquareScreen} />
        <Stack.Screen name='TextInputScreen' component={TextInputScreen} />
        <Stack.Screen name='PasswordScreen' component={PasswordScreen} />
        <Stack.Screen name='Flex' component={Flex} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})