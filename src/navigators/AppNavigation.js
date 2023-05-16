import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screen from "../utils/ScreenNames";
// Screens imports
import FirstScreen from "../screens/firstScreen.JS";
import login from "../screens/Login";
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

import TnC_Txt from "../screens/TermsAndConditionsTxt";
import TnC_CB from "../screens/TermnsAndConditionsCheckbox";
import Exit from "../screens/Exit";
import TermsAndConditions from "../screens/TermsAndConditionsTxt";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator  

      initialRouteName={screen.LoginScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={screen.LoginScreen} component={login} />
      <Stack.Screen name={screen.SignUpScreen} component={Signup} />
      <Stack.Screen
        name={screen.ForgotPasswordScreen}
        component={ForgotPass}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.OTPVerificationScreen}
        component={OTPVerification}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.ResetPasswordScreen}
        component={ResetPassword}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.PasswordChangedScreen}
        component={PasswordChanged}
      ></Stack.Screen>

      <Stack.Screen name={"Principal"} component={Principal} />

      <Stack.Screen
        name={screen.RegisterMedicineScreen}
        component={AddMedicine}
      />

      <Stack.Screen name={"Account"} component={Account} />
      <Stack.Screen name={"Edit"} component={EditAccount} />
      <Stack.Screen name={"Language"} component={Lenguage}></Stack.Screen>

      <Stack.Screen
        name={"Notification"}
        component={Notification}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.DetailsScreen}
        component={Details}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.RegisterMedicineNPScreen}
        component={AddMedicineNP}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.RegisterMedicalTest}
        component={AddTest}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.RegisterMedicalTestNP}
        component={AddTest_v2}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.SugarBloodScreen}
        component={SugarBlood}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.TemperatureScreen}
        component={Temperature}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.HeartRateScreen}
        component={HearthRate}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.BloodPressureScreen}
        component={BloodPressure}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.BreathingFrequencyScreen}
        component={BreathFrequency}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.OxigenScreen}
        component={Oxygenation}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.HealthConditionScreen}
        component={HealthCondition}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.ManualRegisterPt1Screen}
        component={RegisterP1}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.ManualRegisterPt2Screen}
        component={RegisterP2}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.ManualRegisterPt3Screen}
        component={RegisterP3}
      ></Stack.Screen>

      <Stack.Screen name={"Drawer"} component={Drawer}></Stack.Screen>

      <Stack.Screen
        name={screen.TermnsAndConditionsCheckBoxScreen}
        component={TnC_CB}
      ></Stack.Screen>

<Stack.Screen
        name={screen.TermnsAndConditionsTxtScreen}
        component={TnC_Txt}
      ></Stack.Screen>

<Stack.Screen
        name={screen.ExitScreen}
        component={Exit}
      ></Stack.Screen>
    </Stack.Navigator>

  );
};

export default AppStack;
