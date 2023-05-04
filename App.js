//rafce *les crea la estructura basica
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NativeBaseProvider } from "native-base";



// React navigation
  import { NavigationContainer } from '@react-navigation/native';

import AddTest from "./src/screens/AddTest";
import Details from "./src/screens/Details";
import AddTest_v2 from "./src/screens/AddTest_v2";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Details />
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
