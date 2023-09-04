import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//#region Firebase imports
import firebaseConfig from "../config";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
//#endregion

//#region Screens imports
import Splash from "../screens/Splash";
import Login from "../screens/login";
import Signup from "../screens/Signup";
import ForgotPass from "../screens/ForgotPass";
import OTPVerification from "../screens/OTPVerification";
import ResetPassword from "../screens/ResetPassword";
import PasswordChanged from "../screens/PasswordChange";

import Principal from "../screens/Principal";
import Account from "../screens/Account";
import EditAccount from "../screens/EditAccount";
import Lenguage from "../screens/Lenguage";
import Notification from "../screens/Notification";
import Drawer from "./DrawerNavigation";
import RegisterP1 from "../screens/RegisterP1";
import RegisterP2 from "../screens/RegisterP2";
import RegisterP3 from "../screens/RegisterP3";

import Details from "../screens/Details";
import AddTest from "../screens/AddTest";
import AddTest_v2 from "../screens/AddTest_v2";
import AddMedicineNP from "../screens/AddMecine_noPatient";

import RegisterMedicine from "../screens/AddMedicine";

import SugarBlood from "../screens/SugarBlood";
import Temperature from "../screens/Temperature";
import HearthRate from "../screens/HeartRate";
import BloodPressure from "../screens/BloodPreasure";
import BreathFrequency from "../screens/BreathingFrecuency";
import Oxygenation from "../screens/Oxygenation";
import HealthCondition from "../screens/HealtCondition";
import AddMedicine from "../screens/AddMedicine";
import ModifyMedicine from "../screens/ModifyMedicine";

import TnC_Txt from "../screens/TermsAndConditionsTxt";
import TnC_CB from "../screens/TermnsAndConditionsCheckbox";
import Exit from "../screens/Exit";
import QRScanner from "../screens/QRScanner";
import TermsAndConditions from "../screens/TermsAndConditionsTxt";
//#endregion

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

import color from "../utils/Strings/Colors";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    if (initializing) setInitializing(false);
  }
  // useEffect(()=>{
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

  // if (!user){
  //   return(
  //     <Stack.Navigator initialRouteName="Splash"
  //     screenOptions={{ headerShown: false, gestureEnabled: true, contentStyle: {backgroundColor: color.BackgroundApp}}}>
  //       </Stack.Navigator>
  //   ) 
  // }
  // else if(user){
  return (
    <Stack.Navigator initialRouteName="home"
      screenOptions={{ headerShown: false, gestureEnabled: true, contentStyle: { backgroundColor: color.BackgroundApp } }}
    >
      <Stack.Screen name={translationObject.SplashScreen} component={Splash} />
      <Stack.Screen name={translationObject.LoginScreen} component={Login} />
      <Stack.Screen name={translationObject.SignUpScreen} component={Signup} />
      <Stack.Screen
        name={translationObject.ForgotPasswordScreen}
        component={ForgotPass}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.OTPVerificationScreen}
        component={OTPVerification}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.ResetPasswordScreen}
        component={ResetPassword}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.PasswordChangedScreen}
        component={PasswordChanged}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.PrincipalScreen}
        component={Principal} />

      <Stack.Screen
        name={translationObject.RegisterMedicineScreen}
        component={AddMedicine}
      />

      <Stack.Screen name={translationObject.AccountScreen} component={Account} />
      <Stack.Screen name={translationObject.EditAccountScreen} component={EditAccount} />
      <Stack.Screen name={translationObject.LanguageScreen} component={Lenguage}></Stack.Screen>

      <Stack.Screen
        name={translationObject.NotificationScreen}
        component={Notification}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.DetailsScreen}
        component={Details}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.RegisterMedicineNPScreen}
        component={AddMedicineNP}
      ></Stack.Screen>

      <Stack.Screen
        name={"ModifyMedicine"}
        component={ModifyMedicine}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.RegisterMedicalTest}
        component={AddTest}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.RegisterMedicalTest2}
        component={AddTest_v2}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.SugarBloodScreen}
        component={SugarBlood}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.TemperatureScreen}
        component={Temperature}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.HeartRateScreen}
        component={HearthRate}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.BloodPressureScreen}
        component={BloodPressure}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.BreathingFrequencyScreen}
        component={BreathFrequency}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.OxigenScreen}
        component={Oxygenation}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.HealthConditionScreen}
        component={HealthCondition}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.ManualRegisterPt1Screen}
        component={RegisterP1}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.ManualRegisterPt2Screen}
        component={RegisterP2}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.ManualRegisterPt3Screen}
        component={RegisterP3}
      ></Stack.Screen>

      <Stack.Screen name={translationObject.MenuScreen} component={Drawer}></Stack.Screen>

      <Stack.Screen
        name={translationObject.TermnsAndConditionsCheckBoxScreen}
        component={TnC_CB}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.TermnsAndConditionsTxtScreen}
        component={TnC_Txt}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.ExitScreen}
        component={Exit}
      ></Stack.Screen>

      <Stack.Screen
        name={translationObject.QRScanScreen}
        component={QRScanner}
      ></Stack.Screen>
    </Stack.Navigator>

  );
}
//};

export default AppStack;
