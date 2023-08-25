import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking, Dimensions } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { primaryColor } from '../constants/colors'
import { useNavigation } from '@react-navigation/native'

const CheckingMail = () => {
    // console.log(Dimensions.get('window').width);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Check your mail</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    we have sent a password recover insctrictions to your email
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('OtpVerification')}
                style={styles.btnStyle}>
                <Text style={styles.btnStyleText}>Set Code</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Linking.openURL('mailto:')}}
                style={styles.btnSkip}>
                <Text style={styles.btnSkipText}>open E-mail App</Text>
            </TouchableOpacity>
            <View style={styles.infoStyle}>
                <Text style={styles.infoStyleText}>Did not receive the email? Check your spam filter, or</Text>
            </View>
                <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}
                    style={styles.btnInfo}>
                    <Text style={styles.btnInfoText}>try another email address </Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:  Dimensions.get('window').width < 450 ? '100%' :'50%' ,
        alignSelf: 'center',
    },
    title: {
        marginTop: Dimensions.get('window').width < 450 ? verticalScale(200) : '20%',
        alignItems: 'center'
    },
    titleText: {
        fontSize:  Dimensions.get('window').width < 450 ? scale(24) : 32,
        fontWeight: 'bold',
        color: '#252525',
    },
    description: {
        alignItems: 'center',
        paddingHorizontal:  Dimensions.get('window').width < 450 ? scale(45) : '10%',
    },
    descriptionText: {
        textAlign: 'center',
        fontSize:  Dimensions.get('window').width < 450 ? scale(12) :  Dimensions.get('window').width / 55,
    },
    btnStyle: {
        backgroundColor: primaryColor,
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal:  Dimensions.get('window').width < 450 ? scale(35) : '5%',
        paddingVertical:  Dimensions.get('window').height < 450 ? verticalScale(15) : '1.5%',
        marginVertical:  Dimensions.get('window').width < 450 ? verticalScale(30) : '7%',
    },
    btnStyleText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize:  Dimensions.get('window').width < 450 ? scale(13) :  Dimensions.get('window').width / 50,
    },
    btnSkip: {
        alignItems: 'center',
    },
    btnSkipText: {
        fontWeight: '600',
        fontSize:  Dimensions.get('window').width < 450 ?  Dimensions.get('window').width / 30 :  Dimensions.get('window').width / 65,
    },
    infoStyle: {
        marginTop: verticalScale(150),
        marginHorizontal:  Dimensions.get('window').width < 450 ? scale(35) : '10%',
    },
    infoStyleText: {
        fontSize:  Dimensions.get('window').width < 450 ? scale(12) :  Dimensions.get('window').width / 55,
        textAlign: 'center',
    },
    btnInfo: {
        alignSelf: 'center',
    },
    btnInfoText: {
        color: primaryColor,
        fontSize:  Dimensions.get('window').width < 450 ? scale(12) :  Dimensions.get('window').width / 55,
    }

})

export default CheckingMail