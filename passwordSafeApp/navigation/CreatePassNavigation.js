import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PasswordGenerator from '../screens/PasswordGenerator';
import NewAccount from '../screens/NewAccount';

const Stack = createNativeStackNavigator();

const CreatePassNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='createAccount' component={NewAccount} options={{ headerShown: false,}} />
            <Stack.Screen name='newPassord' component={PasswordGenerator} />
        </Stack.Navigator>
    )
}

export default CreatePassNavigation