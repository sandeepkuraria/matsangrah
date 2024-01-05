import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';
import MyStack from './src/components/MyStack';

const Stack = createNativeStackNavigator();

const App = () => {
  return <MyStack />;
};

export default App;
