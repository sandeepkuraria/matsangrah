import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthenticationScreen = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleActivate = async () => {
    if (inputValue === 'Demo') {
      // Save activation code to AsyncStorage
      await AsyncStorage.setItem('activationCode', inputValue);
      console.log('inputValue in Auth_______', inputValue);
      // Navigate to the Dashboard
      navigation.navigate('Dashboard');
    } else {
      // Handle the logic to initiate Activation using activation code.
      console.log('Activation button pressed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', fontSize: 15}}>
        Please Provide Activation Code/Password
      </Text>

      <View>
        <TextInput
          //   style={styles.input}
          style={[
            styles.input,
            {
              borderBottomColor: isFocused ? 'pink' : 'green',
              borderBottomWidth: isFocused ? 2 : 1,
              //   caretColor: isFocused ? 'pink' : 'black',
            },
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          //   caretHidden={false}
          value={inputValue}
          onChangeText={text => setInputValue(text)}
          maxLength={10}
          placeholder="Activation Code/Password"
          placeholderTextColor="grey"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleActivate}>
        <Text style={styles.buttonText}>Activate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: 'green',
    textAlign: 'center',
    // caretColor: 'black',
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
