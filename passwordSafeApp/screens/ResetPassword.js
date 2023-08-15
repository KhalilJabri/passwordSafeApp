import React, { useState, useRef } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { primaryColor } from "../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ResetPassword = () => {
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [showPass1, setShowPass1] = useState(true);
  const [showPass2, setShowPass2] = useState(true);

  const scrollViewRef = useRef(null);

  const handleKeyboardWillShow = () => {
    // Scroll to the end of the screen
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={{height: 100}}></View> */}
      <KeyboardAwareScrollView 
        ref={scrollViewRef}
        onKeyboardWillShow={handleKeyboardWillShow}>
      <View style={styles.imageHeader}>
        <Image resizeMode="contain" source={require('../assets/code_otp.png')} style={styles.imageStyle} />
      </View>
        <View style={styles.titleContainer}>
          <Text style={styles.firstTitle}>Reset</Text>
          <Text style={styles.lastTitle}>Password</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.passwordStyleContainer}>
            <View style={styles.lockIcon}>
              <Feather name={'lock'} size={17} />
            </View>
            <TextInput style={styles.passwordStyle}
              placeholder='Password'
              onChangeText={(text) => setPass1(text)}
              value={pass1}
              secureTextEntry={showPass1} />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPass1(!showPass1)}>
              <Entypo name={!showPass1 ? 'eye' : 'eye-with-line'} size={23} />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordStyleContainer}>
            <Feather name={'lock'} size={17} />
            <TextInput style={styles.passwordStyle}
              placeholder='Confirm Password'
              onChangeText={(text) => setPass2(text)}
              value={pass2}
              secureTextEntry={showPass2} />
            <TouchableOpacity style={styles.iconStyle} onPress={() => setShowPass2(!showPass2)}>
              <Entypo name={!showPass2 ? 'eye' : 'eye-with-line'} size={23} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageHeader: {
    // width: '100%',
    height: '40%',
    width: Dimensions.get('window').width,
    height: 200,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    // alignSelf: 'center',
    paddingLeft: '10%' 
  },
  firstTitle: {
    fontSize: Dimensions.get('window').width / 15,
    fontWeight: 'bold',
    // textAlign: 'left',
  },
  lastTitle: {
    fontSize: Dimensions.get('window').width / 15,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  inputContainer: {
    marginBottom: '15%',
  },
  passwordStyleContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  passwordStyle: {
    width: '70%',
    marginHorizontal: '2%',
    borderBottomWidth: 1,
    fontSize: Dimensions.get('window').width / 27,
  },
  btn: {
    backgroundColor: primaryColor,
    paddingVertical: '4%',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: "bold",
    fontSize: Dimensions.get('window').width / 25,
  },
});

export default ResetPassword;
