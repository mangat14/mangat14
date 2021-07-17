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
const Tab = createBottomTabNavigator();
import FavoriteScreen from "../components/FavoriteScreen";
import RecentScreen from "../components/RecentScreen";
import ContactScreen from "../components/ContactScreen";
import AuthenticationService from "./AuthenicationService";
import TabService from "./TabService";
function NavigationService(){

  return(<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Authenication'} component={AuthenticationService} options={{headerShown:false}}/>
        <Stack.Screen name={'Tab'} component={TabService} options={{headerShown:false}}/>

      </Stack.Navigator>
     {/* <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="FlatList" component={flatList}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
      </Stack.Navigator>*/}

     {/* <Tab.Navigator>
        <Tab.Screen name={"Favorites"} component={FavoriteScreen}/>
        <Tab.Screen  name={"Recents"} component={RecentScreen}/>
        <Tab.Screen name={"Contacts"} component={ContactScreen}/>
      </Tab.Navigator>
*/}
    </NavigationContainer>
  )
}

export default NavigationService
