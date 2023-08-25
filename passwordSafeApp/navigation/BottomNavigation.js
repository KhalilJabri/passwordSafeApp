import React, { useRef } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Animated } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from "react-native-vector-icons/Entypo";

import Acceuil from '../screens/Acceuil';
import Profile from '../screens/Profile';
// import NewAccount from '../screens/NewAccount';
import { primaryColor } from '../constants/colors';
import CreatePassNavigation from './CreatePassNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const tabOffsetValue = useRef(new Animated.Value(5)).current;

  return (
    <Tab.Navigator screenOptions={{
      // headerShown: false,
      "tabBarShowLabel": false,
      tabBarHideOnKeyboard: true,
      "tabBarStyle": {
        // position: 'absolute',
        bottom: '2%',
        marginHorizontal: '5%',
        height: '7.8%',
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#fff',

      }
    }}>
      <Tab.Screen name='acceuilBottom' component={Acceuil} options={{ headerShown: false,
        tabBarIcon: ({ focused }) => (
          // <View style={{ position: 'absolute', top: '25%' }}>
          <View style={{paddingVertical: 13, paddingHorizontal: 10, borderTopWidth: 2, borderColor: focused ? primaryColor : '#fff' }}>
            <Entypo name="home" size={25} color={focused ? primaryColor : 'gray'} />
          </View>

        )
      }} />

      <Tab.Screen name='addAccount' component={CreatePassNavigation} options={{ headerShown: false,
        tabBarIcon: ({ focused }) => (
          // <TouchableOpacity >
          <View style={{
            width: 55,
            height: 55,
            backgroundColor: primaryColor,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
            // borderColor: '#fff',
            // borderWidth: 5,
          }}>
            <Entypo name="plus" size={30} color={'#fff'} />
            {/* <Text>B</Text> */}
          </View>

          // </TouchableOpacity>

        )
      }} />

      < Tab.Screen name='profile' component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          // <View style={{ position: 'absolute', top: '25%' }}>
          <View style={{paddingVertical: 13, paddingHorizontal: 10, borderTopWidth: 2, borderColor: focused ? primaryColor : '#fff'}}>
            <Entypo name="user" size={23} color={focused ? primaryColor : 'gray'}>

            </Entypo>
          </View>

        )
      }} />
    </Tab.Navigator >
  )
}

export default BottomNavigation