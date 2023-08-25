import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Clipboard from '@react-native-clipboard/clipboard'

import { primaryColor } from '../constants/colors'

const PasswordGenerator = () => {
  const [password, setpassword] = useState('');
  const [passLength, setPassLength] = useState(8);
  const [upperSwitch, setUpperSwitch] = useState(false);
  const [lowerSwitch, setLowerSwitch] = useState(false);
  const [numberSwitch, setNumberSwitch] = useState(false);
  const [symbolsSwitch, setSymbolsSwitch] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setString(password);
  };

  const handleSliderChange = (value) => {
    setPassLength(Math.floor(value));
  }

  const plusMinusHandler = (type) => {
    x = passLength;
    if (type === '+' && x < 20) {
      x += 1
    } else if (type === '-' && x > 6) {
      x -= 1
    }
    setPassLength(x)
  }

  const generatePassword = () => {
    let ch = '';
    while (ch.length < passLength && (upperSwitch === true || lowerSwitch === true || numberSwitch === true || symbolsSwitch === true)) {
      let x = Math.floor(Math.random() * (5 - 1) + 1);
      // console.log(x);
      if (upperSwitch === true && x === 1) {
        let number = Math.floor(Math.random() * (90 - 65) + 65);
        ch = ch.concat(String.fromCharCode(number))
      }
      if (lowerSwitch === true && x === 2) {
        let number = Math.floor(Math.random() * (122 - 97) + 97);
        ch = ch.concat(String.fromCharCode(number));
      }
      if (numberSwitch === true && x === 3) {
        let number = Math.floor(Math.random() * (57 - 48) + 48);
        ch = ch.concat(String.fromCharCode(number))
      }
      if (symbolsSwitch === true && x === 4) {
        let number = Math.floor(Math.random() * (38 - 35) + 35);
        ch = ch.concat(String.fromCharCode(number))
      }
    }
    setpassword(ch)
  }

  return (
    <View style={styles.container}>
      <View style={styles.password}>
        <Text style={styles.passwordText}>{password}</Text>
        <TouchableOpacity onPress={copyToClipboard}>
          <MaterialCommunityIcons name={'content-copy'} size={22} color='#252525' />
        </TouchableOpacity>
      </View>
      <View style={styles.containeControlLength}>
        <View style={styles.passwordLength}>
          <Text style={styles.passwordLengthText}>Password length</Text>

          <View style={styles.chooseLength}>
            <TouchableOpacity onPress={() => plusMinusHandler('-')}>
              <Entypo name={'minus'} size={20} />
            </TouchableOpacity>
            <Text style={styles.chooseLengthText}>{passLength}</Text>
            <TouchableOpacity onPress={() => plusMinusHandler('+')}>
              <Entypo name={'plus'} size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View >
          <Slider
            style={{ width: '90%', height: 40, alignSelf: 'center', transform: [{ scaleX: 2 }], transform: [{ scaleY: 1 }] }}
            minimumValue={6}
            maximumValue={20}
            minimumTrackTintColor={primaryColor}
            thumbTintColor={primaryColor}
            value={passLength}
            onValueChange={handleSliderChange}
          />
        </View>
      </View>

      <View style={styles.uppercaseContainer}>
        <Text style={styles.uppercaseText}>Uppercase(A-Z)</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={upperSwitch ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setUpperSwitch(!upperSwitch)}
          value={upperSwitch}
        />
      </View>
      <View style={styles.lowercaseContainer}>
        <Text style={styles.lowercaseText}>Lowercase(a-z)</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={lowerSwitch ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setLowerSwitch(!lowerSwitch)}
          value={lowerSwitch}
        />
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>Numbers(0-9)</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={numberSwitch ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setNumberSwitch(!numberSwitch)}
          value={numberSwitch}
        />
      </View>
      <View style={styles.symbolsContainer}>
        <Text style={styles.symbolsText}>Symbols(!@#$%)</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={symbolsSwitch ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setSymbolsSwitch(!symbolsSwitch)}
          value={symbolsSwitch}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <EvilIcons name={'refresh'} size={30} color='#ffffff' />
        <Text style={styles.buttonText}>Generate Password</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  password: {
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: '4%',
    paddingVertical: '5%',
    marginHorizontal: '3%',
    marginVertical: '4%',
  },
  passwordText: {
    fontSize: 17,
    color: '#252525',
  },
  containeControlLength: {
    // backgroundColor: 'pink',
  },
  passwordLength: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    alignItems: 'center',
  },
  passwordLengthText: {
    fontSize: 17,
    color: '#252525'
  },
  chooseLength: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '25%',
    paddingVertical: '2.5%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: primaryColor
  },
  chooseLengthText: {
    fontSize: 17,
  },
  uppercaseContainer: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '4%'
  },
  uppercaseText: {
    fontSize: 17,
    fontWeight: '600'
  },
  lowercaseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '4%'
  },
  lowercaseText: {
    fontSize: 17,
    fontWeight: '600'
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '4%'
  },
  numberText: {
    fontSize: 17,
    fontWeight: '600'
  },
  symbolsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '4%'
  },
  symbolsText: {
    fontSize: 17,
    fontWeight: '600'
  },
  button: {
    backgroundColor: primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '4%',
    paddingVertical: '5%',
    marginHorizontal: '4%',
    marginVertical: '5%',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingHorizontal: 5,
  }
})

export default PasswordGenerator;