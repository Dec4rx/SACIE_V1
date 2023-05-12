//rafce *les crea la estructura basica
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NativeBaseProvider } from "native-base";



// React navigation
  import { NavigationContainer } from '@react-navigation/native';

import AddTest from "./src/screens/AddTest";
import Details from "./src/screens/Details";
import AddTest_v2 from "./src/screens/AddTest_v2";
import MedicalTest from './src/screens/MedicalTest';
import Medicine from './src/screens/Medicine';
import Notes from  './src/screens/Notes'

import TermsAndConditions from  './src/screens/TermsAndConditionsTxt'

import AddMedicine from './src/screens/AddMedicine';
import ModifyMedicine from './src/screens/ModifyMedicine';
import AddMedicine_noPatient from './src/screens/AddMecine_noPatient';


import AppNavigation from "./src/navigators/AppNavigation";


export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <TermsAndConditions/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
