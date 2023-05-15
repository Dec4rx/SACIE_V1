import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import BlueButton from '../utils/components/BlueButton';
import BorderButton from '../utils/components/BorderButton';

const Welcome = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.sacie}>SACIE</Text>
      <Image
        source={require('../resources/pictures/main.png')} 
        style={styles.image}
      />
      <View style={{alignItems: 'stretch', width: '90%'}}>
        <View style={{marginBottom: 15}}>
        <BlueButton onPress={() => navigation.navigate(screen.SignUpScreen)} title='Sign Up'/>
        </View>
      <BorderButton onPress={() => navigation.navigate(screen.LoginScreen)} title='Login'/>
      </View>
    </View>
  )
}

//#region 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    sacie: {
        fontSize: 64,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    image: {
      width: 325,
      height: 323,
      marginBottom: 20,
    },
  });
  //#endregion

export default Welcome