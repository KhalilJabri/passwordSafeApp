import React, { useState, useEffect, useCallback } from 'react'
import {
    StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Dimensions, ScrollView, KeyboardAvoidingView,
    SafeAreaView
} from 'react-native'
// import { Snackbar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { primaryColor } from '../constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { scale, moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'

import * as authAction from '../redux/actions/authAct'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [visible, setVisible] = useState(false);
    const [errorTitle, setErrorTitle] = useState('');

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const continueHandler = async() => {
        try {
            await dispatch(authAction.register(email, username, phone, password))
            console.log('zzz');
            setErrorTitle('user created succefully!')
            setVisible(true)
            // setTimeout(() => {
            //     // setVisible(false)
            //     navigation.navigate('Auth')
            // }, 3000)

        } catch (err) {
            console.log(err.message);
            // setErrorTitle(err.message)
            setVisible(true)
        //     // setTimeout(() => setVisible(false), 3000)
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                // enableOnAndroid={true}
                contentContainerStyle={{ flexGrow: 1 }}>
                <Image source={require('../assets/sign_up.png')} style={styles.image} />
                <View style={styles.title}>
                    <Text style={styles.titleText}>Sign up</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Entypo name={'email'} size={Dimensions.get('window').width / 19} />
                    <TextInput style={styles.input}
                        placeholder='Email'
                        onChangeText={(text) => setEmail(text)}
                        value={email} />
                </View>

                {/* <Snackbar
                    visible={visible}
                    // onDismiss={onDismissSnackBar}
                    duration={3000}
                    style={{ zIndex: 1 }}>
                    {errorTitle}
                </Snackbar> */}

                <View style={styles.inputContainer}>
                    <MaterialIcons name={'drive-file-rename-outline'} size={Dimensions.get('window').width / 19} />
                    <TextInput style={styles.input}
                        placeholder='Username'
                        onChangeText={(text) => setUsername(text)}
                        value={username} />
                </View>
                <View style={styles.inputContainer}>
                    <Feather name={'phone'} size={Dimensions.get('window').width / 19} />
                    <TextInput style={styles.input}
                        placeholder='Phone'
                        onChangeText={(text) => setPhone(text)}
                        value={phone} />
                </View>
                <View style={styles.inputContainer}>
                    <Feather name={'lock'} size={Dimensions.get('window').width / 19} />
                    <TextInput style={styles.input}
                        placeholder='Password'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={showPassword} />
                    <TouchableOpacity style={styles.iconStyle} onPress={() => setShowPassword(!showPassword)}>
                        <Entypo name={!showPassword ? 'eye' : 'eye-with-line'} size={Dimensions.get('window').width / 18} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={continueHandler}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                <View style={styles.loginContainer}>
                    <Text style={styles.staticLoginText}>Joined us before?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={styles.dynamicLogin}>
                        <Text style={styles.dynamicLoginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3.3,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    title: {
        paddingHorizontal: '7%',
    },
    titleText: {
        fontSize: Dimensions.get('window').width / 15,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 2,
    },
    input: {
        borderBottomWidth: 1,
        width: '80%',
        paddingHorizontal: Dimensions.get('window').width / 30,
        fontSize: Dimensions.get('window').width / 27
    },
    iconStyle: {
        position: 'absolute',
        left: '80%',
    },
    button: {
        backgroundColor: primaryColor,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '5%',
        paddingVertical: '3%',
        borderRadius: 15,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 25,
    },
    loginContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '2%',
    },
    staticLoginText: {
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 28,
    },
    dynamicLogin: {

    },
    dynamicLoginText: {
        color: primaryColor,
        fontSize: Dimensions.get('window').width / 28,
        fontWeight: 'bold',
        paddingHorizontal: '2%',
    }
})

export default SignUp