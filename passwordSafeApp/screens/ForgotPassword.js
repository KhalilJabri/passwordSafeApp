import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { primaryColor } from '../constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const submitHandler = ()=> {
        navigation.navigate('checkMail')
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={{ uri: 'https://img.freepik.com/vecteurs-libre/concept-protection-donnees-isometrique-verrouillage-fenetre-connexion-parent-enfant-3d_1284-63713.jpg?size=626&ext=jpg&ga=GA1.2.1695668408.1675449002&semt=ais' }} />
            </View>
            <View style={styles.body}>
                <View style={styles.titleStyles}>
                    <Text style={styles.titleText}>Forgot </Text>
                    <Text style={styles.titleText}>Password ?</Text>
                </View>
                <View style={styles.descriptionStyles}>
                    <Text style={styles.descriptionText}>
                        Don't worry! it happens. Please enter the address associated with your account.
                    </Text>
                </View>
                <View style={styles.typeContainer}>
                    <Entypo name={'email'} size={Dimensions.get('window').width / 25} />
                    <TextInput style={styles.typeTextInput}
                        placeholder='Enter Email'
                        onChangeText={(text)=> setEmail(text)}
                        value={email} />
                </View>
                <TouchableOpacity onPress={submitHandler} style={styles.btn}>
                    <Text style={styles.btnText}>Submit</Text>
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
        height: '100%',
    },
    header: {
        width: Dimensions.get('window').width ,
        height: Dimensions.get('window').height / 3 ,
        alignSelf: 'center',
    },
    headerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    body: {
        flexGrow: 2,
    },
    titleStyles: {
        paddingHorizontal: '7%',
    },
    titleText: {
        fontSize: Dimensions.get('window').width / 13,
        fontWeight: 'bold',
        color: '#252525',
    },
    descriptionStyles: {
        paddingHorizontal: '7%',
        marginVertical: '1%'
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 30,
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '7%',
        marginVertical: '13%'
    },
    typeTextInput: {
        marginHorizontal: Dimensions.get('window').width / 27,
        fontSize: Dimensions.get('window').width / 27,
        borderBottomWidth: 1,
        width: '80%',
        borderColor: '#8c8c8c',
    },
    btn: {
        backgroundColor: primaryColor,
        marginHorizontal: '10%',
        alignItems: 'center',
        paddingVertical: '3%',
        borderRadius: 10,
    },
    btnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 27,
    }
})

export default ForgotPassword