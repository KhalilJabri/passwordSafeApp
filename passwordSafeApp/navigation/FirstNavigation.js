import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import CheckingMail from '../screens/CheckingMail';
import OtpVerification from '../screens/OtpVerification';
import ResetPassword from '../screens/ResetPassword';
import SignUp from '../screens/SignUp';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const FirstNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Auth' component={Login} />
            <Stack.Screen name='forgotPassword' component={ForgotPassword} />
            <Stack.Screen name='checkMail' component={CheckingMail} />
            <Stack.Screen name='acceuil' component={BottomNavigation} options={{headerShown: false}}/>
            <Stack.Screen name='OtpVerification' component={OtpVerification} />
            <Stack.Screen name='resetPassword' component={ResetPassword} />
            <Stack.Screen name='signUp' component={SignUp} />
        </Stack.Navigator>
    )
}

export default FirstNavigation