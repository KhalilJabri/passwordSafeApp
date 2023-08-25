import React from 'react'
// import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const OnBodringNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SpalshScreen' component={SplashScreen} />
            <Stack.Screen name='Auth' component={Login} />
        </Stack.Navigator>
    )
}

export default OnBodringNav;