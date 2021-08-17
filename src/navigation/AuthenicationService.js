import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from "../LoginScreen";
import SignUp from "../SignUp";

import DetailScreen from "../DetailScreen";
const Stack = createStackNavigator();
import flatList from "../FlatList";
import SignIn from "../SignIn";
const Tab = createBottomTabNavigator();

function AuthenticationService() {
return <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="FlatList" component={flatList}   options={{headerShown:false}}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}  options={{headerShown:false}}/>
  <Stack.Screen name={"SignIn"} component={SignIn} options={{headerShown:false}}/>
      </Stack.Navigator>

}

export default AuthenticationService
