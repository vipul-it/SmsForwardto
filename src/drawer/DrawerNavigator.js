import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import {allImages} from '../utils/images';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => (
  <View style={{flex: 1}}>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Logs')}>
        <Image
          // className="w-[281px] h-[154px]"
          style={{resizeMode: 'cover', width: 128, height: 154}}
          source={allImages.BannerImage}
        />
      </TouchableOpacity>
    </View>
    <View style={{marginTop: -20, marginRight: -4}}>
      
      <Text className="text-right text-whiteC text-[10px]">V0.0.1</Text>
    </View>
    <View className="mx-0 mt-3" style={{marginHorizontal: 0, marginTop: 12}}>
      <TouchableOpacity
        className="  text-lg text-blackC flex-row items-center px-8 h-14 border-b-[0.5px] border-Cgray50 "
        onPress={() => navigation.navigate('Logs')}>
        <Image
          className="w-[18px] h-[18px] mr-4"
          source={allImages.LogsIcon}
          style={{tintColor: 'black', resizeMode: 'contain'}}
        />
        <Text className="  text-lg text-blackC ">Logs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="  text-lg text-blackC flex-row items-center px-8 h-14 border-b-[0.5px] border-Cgray50 "
        onPress={() => navigation.navigate('Inbox')}>
        <Image
          className="w-[18px] h-[18px] mr-4"
          source={allImages.InboxIcon}
          style={{tintColor: 'black', resizeMode: 'contain'}}
        />
        <Text className="  text-lg text-blackC ">Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="  text-lg text-blackC flex-row items-center px-8 h-14 border-b-[0.5px] border-Cgray50 "
        onPress={() => navigation.navigate('Filter')}>
        <Image
          className="w-[18px] h-[18px] mr-4"
          source={allImages.FilterIcon}
          style={{tintColor: 'black', resizeMode: 'contain'}}
        />
        <Text className="  text-lg text-blackC ">Filter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className=" text-lg text-blackC flex-row items-center  border-Cgray50  px-8 h-14 border-b-[0.5px] border-Cgray50"
        onPress={() => navigation.navigate('Setting')}>
        <Image
          className="w-[18px] h-[18px] mr-4"
          source={allImages.SettingIcon}
          style={{tintColor: 'black', resizeMode: 'contain'}}
        />
        <Text className="  text-lg text-blackC ">Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="  text-lg text-blackC flex-row items-center px-8 h-14 border-b-[0.5px] border-Cgray50 "
        onPress={() => navigation.navigate('Profile')}>
        <Image
          className="w-[18px] h-[18px] mr-4"
          source={allImages.ProfileIcon}
          style={{tintColor: 'black', resizeMode: 'contain'}}
        />
        <Text className="  text-lg text-blackC ">Profile</Text>
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
