import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen from '../utils/ScreenNames';
// Screens imports
import FirstScreen from '../screens/firstScreen.JS';
import login from '../screens/Login';
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
import Drawer from './DrawerNavigation'

import Details from '../screens/Details'
import AddTest_v2 from '../screens/AddTest_v2'
import AddMedicineNP from '../screens/AddMecine_noPatient'

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screen.Login}
      screenOptions={{ headerShown: false }}
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
        name={'Principal'}
        component={Principal}
      />

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
        name={screen.DetailsScreen}
        component={Details}>
      </Stack.Screen>

      <Stack.Screen
        name={screen.RegisterMedicineNPScreen}
        component={AddMedicineNP}>
      </Stack.Screen>

      <Stack.Screen
        name={screen.RegisterMedicalTestNP}
        component={AddTest_v2}>
      </Stack.Screen>



      <Stack.Screen
        name={'Drawer'}
        component={Drawer}>
      </Stack.Screen>




    </Stack.Navigator>
  )
}

export default AppStack