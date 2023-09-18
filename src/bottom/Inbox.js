import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {allImages} from '../utils/images';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Users from '../common/Users';
import SmsListener from '../common/SmsListener';
import messaging from '@react-native-firebase/messaging'

const Inbox = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // checkLogin();
    getDeviceToken();
  }, []);


  const checkLogin = async () => {
    const id = await AsyncStorage.getItem('USERID');
    if (id !== null) {
      setLogg(true);
    }
  };

  const getDeviceToken = async () =>{
    let Token = await messaging().getToken();
    console.log(Token);
  }

  const [logg, setLogg] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
            Inbox
          </Text>
        </View>
      </TouchableOpacity>
      {logg ? (
        <Users />
        // <SmsListener/>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#1E1E1E', fontWeight: 600}}>No Results</Text>
        </View>
      )}
    </View>
  );
};

export default Inbox;
