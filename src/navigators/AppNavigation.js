import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen from '../utils/ScreenNames';
// Screens imports
import FirstScreen from '../screens/firstScreen.JS';
import login from '../screens/login';
import Signup from '../screens/Signup';
import ForgotPass from '../screens/ForgotPass';
import OTPVerification from '../screens/OTPVerification';
import ResetPassword from '../screens/ResetPassword';
import PasswordChanged from '../screens/PasswordChange';

import Principal from '../screens/Principal';
import Account from '../screens/Account';
import EditAccount from '../screens/EditAccount';
import Lenguage from '../screens/Lenguage';
import Notification from '../screens/Notification';

import BloodPressure from '../screens/BloodPreasure'
import HearthRate from '../screens/HeartRate'
import SugarBlood from '../screens/SugarBlood'
import Temperature from '../screens/Temperature'
import BreathingFrecuency from '../screens/BreathingFrecuency'
import Oxygenation from '../screens/Oxygenation'
import HealtCondition from '../screens/HealtCondition'

import Details from '../screens/Details'
import { Octicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.Login}
      screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
            name={screen.LoginScreen} 
            component={login} 
        />
        <Stack.Screen 
            name={screen.SignUpScreen} 
            component={Signup} 
        />
        <Stack.Screen 
        name={screen.ForgotPasswordScreen}
        component={ForgotPass}>
        </Stack.Screen>

        <Stack.Screen
        name={screen.OTPVerificationScreen}
        component={OTPVerification}>
        </Stack.Screen>

        <Stack.Screen
        name={screen.ResetPasswordScreen}
        component={ResetPassword}
        ></Stack.Screen>

        <Stack.Screen
        name={screen.PasswordChangedScreen}
        component={PasswordChanged}
        ></Stack.Screen>

<Stack.Screen 
            name={'Account'} 
            component={Account} 
        />
        <Stack.Screen 
            name={'Edit'} 
            component={EditAccount} 
        />
        <Stack.Screen 
        name={'Language'}
        component={Lenguage}>
        </Stack.Screen>

        <Stack.Screen
        name={'Notification'}
        component={Notification}>
        </Stack.Screen>

        <Stack.Screen
        name={'Principal'}
        component={Principal}>
        </Stack.Screen>

        <Stack.Screen
        name={'Details'}
        component={Details}>
        </Stack.Screen>

        <Stack.Screen
        name={'BloodPressure'}
        component={BloodPressure}>
        </Stack.Screen>

        <Stack.Screen
        name={'HeartRate'}
        component={HearthRate}>
        </Stack.Screen>

        <Stack.Screen
        name={'SugarBlood'}
        component={SugarBlood}>
        </Stack.Screen>

        <Stack.Screen
        name={'Temperature'}
        component={Temperature}>
        </Stack.Screen>

        <Stack.Screen
        name={'BF'}
        component={BreathingFrecuency}>
        </Stack.Screen>

        <Stack.Screen
        name={'OX'}
        component={Oxygenation}>
        </Stack.Screen>
        
        <Stack.Screen
        name={'HC'}
        component={HealtCondition}>
        </Stack.Screen>

        </Stack.Navigator>
  )
}

export default AppStack