import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
import { primaryColor } from '../constants/colors'
import { useNavigation } from '@react-navigation/native'

const OtpVerification = () => {
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');

    const navigation = useNavigation();

    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();

    const submitHandler1 = (text) => {
        setCode1(text);
        if (code1 === '') {
            ref_input2.current.focus()
        }
    }
    const submitHandler2 = (text) => {
        setCode2(text);
        if (code2 === '') {
            ref_input3.current.focus()
        }
    }
    const submitHandler3 = (text) => {
        setCode3(text);
        if (code3 === '') {
            ref_input4.current.focus()
        }
    }
    const submitHandler4 = (text) => {
        setCode4(text);
    }

    const confirmHandler = () => {
        navigation.navigate('resetPassword')
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Enter OTP</Text>
            </View>
            <View style={styles.descriptionStyle}>
                <Text style={styles.descriptionText}>
                    An 4 digit code has been sent to your mail / phone
                </Text>
            </View>
            <View style={styles.codeStyleContainer}>
                <TextInput style={styles.codeStyle}
                    onChangeText={submitHandler1}
                    value={code1}
                    // onSubmitEditing={() => ref_input2.current.focus()}
                    maxLength={1} />

                <TextInput style={styles.codeStyle}
                    onChangeText={submitHandler2}
                    value={code2}
                    // onSubmitEditing={() => ref_input3.current.focus()}
                    ref={ref_input2}
                    maxLength={1} />

                <TextInput style={styles.codeStyle}
                    onChangeText={submitHandler3}
                    value={code3}
                    // onSubmitEditing={() => ref_input4.current.focus()}
                    ref={ref_input3}
                    maxLength={1} />

                <TextInput style={styles.codeStyle}
                    onChangeText={submitHandler4}
                    value={code4}
                    ref={ref_input4}
                    maxLength={1} />
            </View>
            <TouchableOpacity onPress={confirmHandler}
                style={styles.btn}>
                <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        marginTop: '20%',
        alignItems: 'center',
    },
    titleText: {
        fontSize: Dimensions.get('window').width / 10,
        fontWeight: 'bold',
    },
    descriptionStyle: {
        alignItems: 'center',
        paddingHorizontal: '10%',
    },
    descriptionText: {
        fontSize: Dimensions.get('window').width / 27,
        textAlign: 'center',
    },
    codeStyleContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: '15%',
    },
    codeStyle: {
        borderWidth: 1,
        marginHorizontal: 10,
        width: '10%',
        textAlign: 'center',
        fontSize: Dimensions.get('window').width / 20,
    },
    btn: {
        backgroundColor: primaryColor,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: '3%',
        borderRadius: 10,
    },
    btnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 25,
    }
})

export default OtpVerification;