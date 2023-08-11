import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'


const Item = (props) => {

  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.itemContent}>
            <View style={styles.informationContent}>
                <Image style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1691070035~exp=1691070635~hmac=c0e2baaf11056ce457b31f27e0fd68423d3a0bcfc115e58a8ba37f1721bc4015'}} />
                <View style={styles.information}>
                    <Text>{props.url}</Text>
                    <Text>{props.email}</Text>
                </View>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity >
                    <Feather name={'copy'} size={25} color='#8c8c8c' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name={'dots-three-vertical'} size={25} color='#8c8c8c' />
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContent: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        // height: '11%',
        borderRadius: 15,
        borderWidth: 0.7,
        borderColor: '#8c8c8c',
        marginHorizontal: '6%',
        paddingVertical: '2%',
        marginVertical: '2%'

    },
    informationContent: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 50,
    },
    image: {
        // backgroundColor: 'black',
        height: 50,
        width: 50,
        // alignItems: 'center',
    },
    information: {
        // backgroundColor: 'yellow',
        // backgroundColor: 'white',
        paddingHorizontal: 15,
        justifyContent: 'space-evenly',
    },
    icons: {
        // flex: 2,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'space-around'

    }
})

export default Item