import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logs from './Logs';
import Filter from './Filter';
import Inbox from './Inbox';
import {allImages} from '../utils/images';
import {Image} from 'react-native';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        // tabBarActiveBackgroundColor: "#b0abba",

        tabBarStyle: {
          height: 55,
          paddingHorizontal: 5,
          paddingTop: 7,
          paddingBottom: 7,
          backgroundColor: '#726DA8',
          position: 'absolute',
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen
        name="Logs"
        component={Logs}
        options={{
          tabBarLabel: 'Logs',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              name="logs"
              source={allImages.LogsIcon}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={allImages.InboxIcon}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Filter"
        component={Filter}
        options={{
          tabBarLabel: 'Filter',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={allImages.FilterIcon}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
