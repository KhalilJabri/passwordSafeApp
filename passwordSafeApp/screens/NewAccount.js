import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { Snackbar, Button } from "react-native-paper"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

import { urlData } from '../data/UrlData'
import UrlItem from '../components/UrlItem';
import { primaryColor } from '../constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewAccount = () => {
    const [url, setUrl] = useState('www.exemple.com');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selected, setSelected] = useState();
    const [addActive, setAddActive] = useState(false);

    const navigation = useNavigation();

    const itemHandler = (itemData) => {
        return <UrlItem index={itemData.index}
            number={selected}
            url={itemData.item.url}
            name={itemData.item.name}
            selected={() => {
                setSelected(itemData.index);
                setUrl(itemData.item.url);
                setAddActive(false)
            }} />
    }

    const addUrlHandler = () => {
        setSelected(-1)
        setAddActive(true)
    }

    const goToPassGeneratorHandler = () => {
        navigation.navigate('newPassord')
    }

    const confirmeHandler = () => {
        navigation.navigate('acceuilBottom')
    }

    return (
        <SafeAreaProvider style={styles.container}>
            {/* <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
            <View>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                    
                    }}
                    >
                    Hey there! I'm a Snackbar.
                </Snackbar>
            </View> */}
            <View style={styles.listContainer}>
                <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', marginTop: '4%' }}>
                    <TouchableOpacity onPress={addUrlHandler} style={styles.add}>
                        <Feather name="plus" size={Dimensions.get('window').width / 25} color={'#252525'} />
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                    <FlatList horizontal
                        keyExtractor={(item, index) => index}
                        data={urlData}
                        renderItem={itemHandler}
                        scrollEnabled={false} />
                </ScrollView>
            </View>
            <View style={[styles.urlContainer, { display: addActive ? 'none' : 'flex' }]}>
                <Text style={styles.urlText}>{url}</Text>
            </View>
            <KeyboardAwareScrollView>
                <View style={[styles.inputContainer, { display: addActive ? 'flex' : 'none' }]}>
                    <Text style={styles.labelText}>Url</Text>
                    <View style={styles.input}>
                        <AntDesign name={'link'} size={Dimensions.get('window').width / 22} color={'#252525'} />
                        <TextInput style={styles.inputType}
                            editable={addActive}
                            placeholder='www.exemple.com'
                            onChangeText={(text) => setUrl(text)}
                            value={url} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Username</Text>
                    <View style={styles.input}>
                        <AntDesign name={'user'} size={Dimensions.get('window').width / 22} color={'#252525'} />
                        <TextInput style={styles.inputType}
                            placeholder='exemple'
                            onChangeText={(text) => setUsername(text)}
                            value={username} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>E-mail</Text>
                    <View style={styles.input}>
                        <Fontisto name={'email'} size={Dimensions.get('window').width / 20} color={'#252525'} />
                        <TextInput style={styles.inputType}
                            placeholder='exemple@gmail.com'
                            onChangeText={(text) => setEmail(text)}
                            value={email} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Password</Text>
                    <View style={styles.input}>
                        <Ionicons name={'lock-closed-outline'} size={Dimensions.get('window').width / 20} color={'#252525'} />
                        <TextInput style={styles.inputType}
                            placeholder='like this : AQ4@%fe13'
                            onChangeText={(text) => setPassword(text)}
                            value={password} />
                        <TouchableOpacity style={styles.passGuess} onPress={goToPassGeneratorHandler}>
                            <Feather name="refresh-ccw" size={Dimensions.get('window').width / 20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={confirmeHandler} style={styles.btn}>
                    <Text style={styles.btnText}>OK DONE</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    listContainer: {
        flexDirection: 'row',
        marginTop: '4%'
    },
    add: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        marginHorizontal: Dimensions.get("window").width / 65,
        paddingHorizontal: Dimensions.get("window").width / 25,
        paddingVertical: Dimensions.get("window").height / 45,
        borderRadius: 15,
    },
    addText: {
        color: '#252525'
    },
    urlContainer: {
        alignItems: 'center',
        marginTop: '5%',
        paddingVertical: '6.5%',
    },
    urlText: {
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 25,
        color: '#595959',
    },
    inputContainer: {
        marginHorizontal: '5%',
        marginVertical: '3%',
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: Dimensions.get("window").width / 28,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#e6e6e6',
        paddingHorizontal: '5%',
        marginTop: '1%',
    },
    inputType: {
        marginLeft: '3%',
        width: '82%',
    },
    passGuess: {
        position: 'absolute',
        right: '6%'
    },
    btn: {
        backgroundColor: primaryColor,
        alignItems: 'center',
        alignSelf: 'center',
        width: '80%',
        paddingVertical: '3%',
        borderRadius: 15,
        elevation: 10,
        marginTop: '7%'
    },
    btnText: {
        color: '#ffffff',
        fontSize: Dimensions.get('window').width / 27,
        fontWeight: 'bold',
    }
})

export default NewAccount