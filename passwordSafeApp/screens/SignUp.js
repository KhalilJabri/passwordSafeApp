import React, { useState, useEffect } from 'react'
import {
    StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Dimensions, ScrollView, KeyboardAvoidingView,
    SafeAreaView
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { primaryColor } from '../constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { scale, moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                enableOnAndroid={true}
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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                <View style={styles.loginContainer}>
                    <Text style={styles.staticLoginText}>Joined us before?</Text>
                    <TouchableOpacity style={styles.dynamicLogin}>
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
        width: '70%',
        height: '40%',
        alignSelf: 'center',
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