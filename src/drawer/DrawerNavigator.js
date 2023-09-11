import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import {allImages} from '../utils/images';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => (
  <View style={{flex: 1}}>
    <View style={{width: 280, height: 154}}>
      <Image
        style={{resizeMode: 'cover', width: '100%', height: '100%'}}
        source={allImages.BannerImage}
      />
    </View>
    <View style={{marginTop: -20, marginRight: 8}}>
      <Text style={{textAlign: 'right', color: '#fff', fontSize: 10}}>
        V0.0.1
      </Text>
    </View>
    <View style={{marginVertical: 0, marginTop: 12}}>
      <TouchableOpacity
        style={{
          fontSize: 18,
          color: '#000000',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 32,
          height: 56,
          borderBottomWidth: 0.5,
          borderColor: '#7F7F7F',
        }}
        onPress={() => navigation.navigate('Logs')}>
        <Image
          source={allImages.LogsIcon}
          style={{
            tintColor: 'black',
            resizeMode: 'contain',
            width: 18,
            height: 18,
            marginRight: 16,
          }}
        />
        <Text style={{fontSize: 18, color: '#000'}}>Logs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          fontSize: 18,
          color: '#000000',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 32,
          height: 56,
          borderBottomWidth: 0.5,
          borderColor: '#7F7F7F',
        }}
        onPress={() => navigation.navigate('Inbox')}>
        <Image
          source={allImages.InboxIcon}
          style={{
            tintColor: 'black',
            resizeMode: 'contain',
            width: 18,
            height: 18,
            marginRight: 16,
          }}
        />
        <Text style={{fontSize: 18, color: '#000'}}>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          fontSize: 18,
          color: '#000000',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 32,
          height: 56,
          borderBottomWidth: 0.5,
          borderColor: '#7F7F7F',
        }}
        onPress={() => navigation.navigate('Filter')}>
        <Image
          source={allImages.FilterIcon}
          style={{
            tintColor: 'black',
            resizeMode: 'contain',
            width: 18,
            height: 18,
            marginRight: 16,
          }}
        />
        <Text style={{fontSize: 18, color: '#000'}}>Filter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          fontSize: 18,
          color: '#000000',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 32,
          height: 56,
          borderBottomWidth: 0.5,
          borderColor: '#7F7F7F',
        }}
        onPress={() => navigation.navigate('Setting')}>
        <Image
          source={allImages.SettingIcon}
          style={{
            tintColor: 'black',
            resizeMode: 'contain',
            width: 18,
            height: 18,
            marginRight: 16,
          }}
        />
        <Text style={{fontSize: 18, color: '#000'}}>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          fontSize: 18,
          color: '#000000',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 32,
          height: 56,
          borderBottomWidth: 0.5,
          borderColor: '#7F7F7F',
        }}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          source={allImages.ProfileIcon}
          style={{
            tintColor: 'black',
            resizeMode: 'contain',
            width: 18,
            height: 18,
            marginRight: 16,
          }}
        />
        <Text style={{fontSize: 18, color: '#000'}}>Profile</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
