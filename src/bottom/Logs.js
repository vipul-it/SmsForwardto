import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {allImages} from '../utils/images';
import {useNavigation} from '@react-navigation/native';


const Logs = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <View
          style={{
            resizeMode: 'contain',
            marginVertical: 20,
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 34, height: 34, marginRight: 20}}
            source={allImages.MenuIcon}
          />
          <Text style={{color: '#000', fontSize: 18, fontWeight: 600}}>
            Logs
          </Text>
        </View>
      </TouchableOpacity>
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#1E1E1E', fontWeight: 500}}>No Logs</Text>
      </View> */}
      <Button onPress={()=>{
        navigation.navigate('GroupChat')
      }} title='Office Group'/>
      
      
    </View>
  );
};

export default Logs;
