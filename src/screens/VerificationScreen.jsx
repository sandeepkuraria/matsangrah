import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IndianFlagImage from '../assets/indianFlag.png';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  const handleGetOTP = async () => {
    if (inputValue === '8435979788') {
      try {
        // Save mobile number to AsyncStorage
        await AsyncStorage.setItem('mobileNumber', inputValue);
        console.log('inputValue in Verification__________', inputValue);
        // Navigate to the AuthenticationScreen
        navigation.navigate('AuthenticationScreen');
      } catch (error) {
        console.error('Error saving mobile number:', error);
      }
    } else {
      // Handle the logic to initiate OTP generation or verification
      console.log('Get OTP button pressed');
    }
  };
  return (
    <View style={styles.container}>
      <View style={{paddingTop: '20%', paddingBottom: '4%'}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 26}}>
          Verify your Mobile Number
        </Text>
      </View>
      <View style={{}}>
        <Text style={{color: 'black', fontSize: 18, paddingHorizontal: '3%'}}>
          An OTP will be sent on the mentioned mobile number to verify the user
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={IndianFlagImage} style={styles.flagImage} size={50} />
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            +91
          </Text>
        </View>
        <View style={{paddingLeft: 10, flex: 1}}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            maxLength={10}
            keyboardType="numeric"
            placeholder="Mobile Number"
            placeholderTextColor="grey"
          />
        </View>
      </View>

      {/* "Get OTP" button */}
      <TouchableOpacity style={styles.button} onPress={handleGetOTP}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  flagImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  input: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: '3.5%',
    paddingHorizontal: '40%',
    borderRadius: 8,
    marginTop: '40%',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default VerificationScreen;
