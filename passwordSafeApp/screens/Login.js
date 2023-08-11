import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import { primaryColor } from '../constants/colors';
import Clipboard from '@react-native-clipboard/clipboard'

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleCopyText = async () => {
    try {
      await Clipboard.setString(inputText);
      alert('Text copied to clipboard!');
    } catch (error) {
      alert('Failed to copy text to clipboard.');
    }
  };

  handleCopyText

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setPassword(text);
  };

  fetchCopiedText

  return (
    <View style={styles.container}>
      <Image source={require('../assets/login.png')} style={styles.imageLogin} />
      <View style={styles.title}>
        <Text style={styles.titleText}>Login</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>Email</Text>
        <View style={styles.inputContainer}>
          <Entypo name={'email'} size={17} />
          <TextInput style={styles.type} 
            placeholder='Email'
            onChangeText={(text)=> setEmail(text)}
            value={email} />
        </View>
            <View style={styles.line}></View>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>Password</Text>
        <View style={styles.inputContainer}>
          <Feather name={'lock'} size={17}  />
          <TextInput style={styles.type}
            placeholder='Password'
            onChangeText={(text)=> setPassword(text)}
            value={password}
            secureTextEntry={showPassword} />
            <TouchableOpacity style={styles.iconStyle} onPress={()=> setShowPassword(!showPassword)}>
              <Entypo name={!showPassword ? 'eye' : 'eye-with-line' } size={23} />
            </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginContainer} onPress={fetchCopiedText}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.or}>
        <View style={styles.orLine}></View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.orLine}></View>
      </View>
      <TouchableOpacity style={styles.loginGoogleContainer}>
        <Image source={require('../assets/google_logo.png')} style={styles.loginGoogleImage} />
        <Text style={styles.loginGoogleText}>Login with google</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text style={styles.staticText}>New to Logistics?</Text>
        <TouchableOpacity>
          <Text style={styles.dynamicText}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageLogin: {
    width: '40%',
    height: '25%',
    alignSelf: 'center',
  },
  title: {
    paddingHorizontal: '4%',
  },
  titleText: {
    fontSize: Dimensions.get('window').width / 12,
    fontWeight: 'bold',
  },
  typeContainer: {
    paddingHorizontal: '4%',
  },
  typeText: {
    fontSize: Dimensions.get('window').width / 23,
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  type: {
    paddingHorizontal: '5%',
    fontSize: Dimensions.get('window').width / 25,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#d9d9d9',
    width: '70%',
    alignSelf: 'center', 
  },
  iconStyle: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    left: '85%',
    alignSelf: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: '5%',
    paddingTop: '2%',
  },
  forgotPasswordText: {
    color: primaryColor,
    fontWeight: 'bold'
  },
  loginContainer: {
    backgroundColor: primaryColor,
    marginHorizontal: '10%',
    alignItems: 'center',
    paddingVertical: '3%',
    borderRadius: 10,
    marginVertical: '2%'
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width / 23,
  },
  or: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  orLine: {
    borderBottomWidth: 1,
    width: '30%',
    borderColor: '#d9d9d9',
    alignSelf: 'center',
  },
  orText: {
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  loginGoogleContainer: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: '10%',
    justifyContent: 'center',
    paddingVertical: '3%',
    borderRadius: 10,
    marginVertical: '2%'
  },
  loginGoogleImage: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: '7%',
  },
  loginGoogleText: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width / 23,
    alignSelf: 'center',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  staticText: {
    fontWeight: 'bold',
  },
  dynamicText: {
    color: primaryColor,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
})

export default login