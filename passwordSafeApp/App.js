import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


import Acceuil from './screens/Acceuil';
import Item from './components/Item';
import Profile from './screens/Profile';
import Login from './screens/Login';
import PasswordGenerator from './screens/PasswordGenerator';
import SignUp from './screens/SignUp';
import CheckingMail from './screens/CheckingMail';
import ForgotPassword from './screens/ForgotPassword';
import OtpVervification from './screens/OtpVervification';

function App() {
 

  return (
   <View style={styles.container}>
    <OtpVervification />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
