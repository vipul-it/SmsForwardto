import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AppNavigator />
    </View>
  )
}

export default App