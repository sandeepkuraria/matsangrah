import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import SplashScreen from '../screens/SplashScreen';
import VerificationScreen from '../screens/VerificationScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import FindVoter from '../screens/FindVoter';
import FindFamily from '../screens/FindFamily';
import Print from '../screens/Print';
import CasteData from '../screens/CasteData';
import Vote from '../screens/Vote';
import Update from '../screens/Update';
import VoterInformation from '../screens/VoterInformation';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{title: 'VerificationScreen', headerShown: false}}
        />
        <Stack.Screen
          name="AuthenticationScreen"
          component={AuthenticationScreen}
          options={{title: 'AuthenticationScreen', headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard', headerShown: false}}
        />
        <Stack.Screen
          name="FindVoter"
          component={FindVoter}
          options={{title: 'FindVoter', headerShown: false}}
        />

        <Stack.Screen
          name="FindFamily"
          component={FindFamily}
          options={{title: 'FindFamily', headerShown: false}}
        />
        <Stack.Screen
          name="Print"
          component={Print}
          options={{title: 'Print', headerShown: false}}
        />
        <Stack.Screen
          name="CasteData"
          component={CasteData}
          options={{title: 'CasteData', headerShown: false}}
        />
        <Stack.Screen
          name="Vote"
          component={Vote}
          options={{title: 'Vote', headerShown: false}}
        />
        <Stack.Screen
          name="Update"
          component={Update}
          options={{title: 'Update', headerShown: false}}
        />
        <Stack.Screen
          name="VoterInformation"
          component={VoterInformation}
          options={{title: 'VoterInformation', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
