import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Login");
      }}>
         <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  login: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});