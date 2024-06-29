import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';

import Acceuil from './screens/Acceuil';
import Item from './components/Item';
import Profile from './screens/Profile';
import Login from './screens/Login';
import PasswordGenerator from './screens/PasswordGenerator';
import SignUp from './screens/SignUp';
import CheckingMail from './screens/CheckingMail';
import ForgotPassword from './screens/ForgotPassword';
import OtpVervification from './screens/OtpVerification';
import ResetPassword from './screens/ResetPassword';
import SplashScreen from './screens/SplashScreen';
import { primaryColor } from './constants/colors';
import OnBodringNav from './navigation/OnBodringNav';
import FirstNavigation from './navigation/FirstNavigation';
import NewAccount from './screens/NewAccount';
import BottomNavigation from './navigation/BottomNavigation';
import mainRedux from './redux/mainRedux';

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={primaryColor} />
    </View>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showOnBoadring, setShowOnBoadring] = useState(false);

  const checkOnboarding = async () => {
    try {
      // await AsyncStorage.removeItem('@viewedOnBoarding');
      var value = await AsyncStorage.getItem('@viewedOnBoarding');
      if (value === null) {
        setShowOnBoadring(true)
      }
    } catch (err) {
      console.log('Error on @viewedOnBoarding', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkOnboarding();
  }, [])

  return (
    <View style={styles.container}>
      {
        loading ? <Loading /> :
          showOnBoadring ?
            <Provider store={mainRedux}>
              <NavigationContainer>
                <OnBodringNav />
              </NavigationContainer>
            </Provider> :
            <Provider store={mainRedux}>
              <NavigationContainer>
                <FirstNavigation />
              </NavigationContainer>
            </Provider>
      }
      {/* <NewAccount /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
