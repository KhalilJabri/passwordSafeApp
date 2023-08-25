import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { primaryColor } from '../constants/colors'

const SplashScreen = () => {
    const navigation = useNavigation();

    const navigationHandler = async() => {
        // await AsyncStorage.setItem('')
        try {
            await AsyncStorage.setItem('@viewedOnBoarding', 'true');
            navigation.replace('Auth');
            
        }catch (err) {
            console.log('Error @setItem: ', err);
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/mkj-logo1.png')} style={styles.headerLogo} />
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    Welcome to my Application of saving password
                </Text>
            </View>
        </View>
        <View style={styles.body}>
            <TouchableOpacity onPress={navigationHandler} style={styles.btn}>
                <Text style={styles.btnText}>Continue ...</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        // backgroundColor: 'pink',
        flex: 2,
        width: Dimensions.get('window').width ,
        alignSelf: 'center',
        marginTop: '20%'
    },
    headerLogo: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    description: {
        alignItems: 'center',
    },
    descriptionText: {
        fontWeight: '600',
    },
    body: {
        flex: 3,
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: primaryColor,
        alignItems: 'center',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 25,
        paddingVertical: Dimensions.get('window').height / 45,
    },
    btnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 30,
    }

})

export default SplashScreen