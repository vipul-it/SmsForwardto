import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Parent from './normal/Parent';
import Setting from './screen/Setting';
import Profile from './screen/Profile';
import AddSMSFilter from './screen/AddSMSFilter';
import AddNotificationFilter from './screen/AddNotificationFilter';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Splash from './screen/Splash';
import Chat from './screen/Chat';
import GroupChat from './screen/GroupChat';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
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
          options={{headerShown: true}}
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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="GroupChat"
          component={GroupChat}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
