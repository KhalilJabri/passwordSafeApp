import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const [image, setImage] = useState("https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1691013223~exp=1691013823~hmac=d2290931bc11d4054255a719623f29c760ee548dfac279abe2370aae09bf95d5");

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <ScrollView>
        {/* <View style={styles.title}>
            <TouchableOpacity style={styles.titleIcon}>
                <MaterialIcons name={'arrow-back-ios'} size={20} />
            </TouchableOpacity>
            <View style={styles.titleWord}>
                <Text style={styles.titleProfile}>Profile</Text>
            </View>
            <View >
            </View>
        </View> */}
        <View style={styles.profileInformation}>
            <Image source={{uri: image}} style={styles.image} />
            <View style={{ 
                alignItems: 'center',
                paddingVertical: 7,
                }}>
                <Text style={{color: '#252525', fontWeight: 'bold', fontSize: 17}}>Username</Text>
            </View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>email</Text>
        </View>
        <TouchableOpacity style={styles.share}>
            <Feather name={'share-2'} size={25} />
            <Text style={styles.shareText}>share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exportImport}>
            <Feather name={'inbox'} size={25} />
            <Text style={styles.exportImportText}>Export & Import</Text>
        </TouchableOpacity>
        <View style={styles.line}>

        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('resetPassword')}
            style={styles.password}>
            <Feather name={'lock'} size={25}  />
            <Text style={styles.passwordText}>Change password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedback}>
            <Foundation name={'comment'} size={25} />
            <Text style={styles.feedbackText}>Send Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.help}>
            <Feather name={'help-circle'} size={25} />
            <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileInformation: {
        alignItems: 'center',
        paddingVertical: '5%'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#8c8c8c'
    },
    share: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        marginTop: '5%',
    },
    shareText: {
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    exportImport: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingVertical: '5%',
    },
    exportImportText: {
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    line: {
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor: '#d9d9d9'
    },
    password: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingVertical: '5%',
    },
    passwordText: {
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    feedback: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingVertical: '5%',
    },
    feedbackText: {
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    help: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingVertical: '5%',
    },
    helpText: {
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: 'bold',
    }
})

export default Profile