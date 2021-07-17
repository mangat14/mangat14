import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from "../LoginScreen";
import SignUp from "../SignUp";

import DetailScreen from "../DetailScreen";
import flatList from "../FlatList";
const Tab = createBottomTabNavigator();
import FavoriteScreen from "../components/FavoriteScreen";
import RecentScreen from "../components/RecentScreen";
import ContactScreen from "../components/ContactScreen";
import AddDetail from "../components/AddDetail";
const StackService=createStackNavigator()
const ContactService=createStackNavigator()
function RecentStack(){
  return (
    <StackService.Navigator>
      <StackService.Screen name="Recents" component={RecentScreen}  options={{headerShown:false}}/>
      <StackService.Screen name="DetailScreen" component={DetailScreen}  options={{headerShown:false}}/>
    </StackService.Navigator>
  )
}

function ContactStack(){
  return (
    <ContactService.Navigator>
      <ContactService.Screen name="ContactScreen" component={ContactScreen}  options={{headerShown:false}}/>
      <ContactService.Screen name="AddDetail" component={AddDetail}  options={{headerShown:false}}/>
    </ContactService.Navigator>
  )
}



function TabService(){

  return( <Tab.Navigator>
        <Tab.Screen name="Favorites" component={FavoriteScreen} options={{headerShown:false}}/>
        <Tab.Screen  name="Recents" component={RecentStack} options={{headerShown:false}}/>
        <Tab.Screen name="Contacts" component={ContactStack}  options={{headerShown:false}}/>
      </Tab.Navigator>

  )
}

export default TabService
