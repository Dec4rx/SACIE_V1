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
        
        </Stack.Navigator>
  )
}

export default AppStack