//rafce *les crea la estructura basica
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VitalSigns from './src/screens/VitalSigns';
import BloodPreasure from './src/screens/BloodPreasure';
import RegisterP1 from './src/screens/RegisterP1';
import RegisterP2 from './src/screens/RegisterP2';
import RegisterP3 from './src/screens/RegisterP3';
import HeartRate from './src/screens/HeartRate';
import SugarBlood from './src/screens/SugarBlood';
import HealtCondition from './src/screens/HealtCondition';
import {Image, Button } from 'react-native';

export default function App() {
  return (
    <HealtCondition/>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
