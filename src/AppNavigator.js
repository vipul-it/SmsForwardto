import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Parent from './normal/Parent';
import Setting from './screen/Setting';
import Profile from './screen/Profile';
import AddSMSFilter from './screen/AddSMSFilter';
import AddNotificationFilter from './screen/AddNotificationFilter';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddSMSFilter"
          component={AddSMSFilter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNotificationFilter"
          component={AddNotificationFilter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
