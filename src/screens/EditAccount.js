<<<<<<< Updated upstream
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import FormInput from '../utils/components/FormInput'
import BackButton from '../utils/components/BackButton'
import CorrectButton from '../utils/components/CorrectButton'
=======
import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FormInput from "../utils/components/FormInput";
import BackButton from "../utils/components/BackButton";
import CorrectButton from "../utils/components/CorrectButton";
>>>>>>> Stashed changes

const EditAccount = ({navigation}) => {
    const [name, onChangeName] = React.useState('');
    const [phone, onChangePhone] = React.useState('');
    const [email, onChangeEmail] = React.useState('');

<<<<<<< Updated upstream
    const handleSaveProfile = () => {
      navigation.navigate('Account');
      };
    
      const handleGoBack = () => {
        navigation.goBack();
      };
=======
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';
import { onValue, ref, set, update } from "firebase/database";
import { firebaseConfig } from "../config";
import { db } from "../Database";
import {initializeApp} from "firebase/app";

import AsyncStorage from '@react-native-async-storage/async-storage';

const EditAccount = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const actualizar= async() =>{
    const value = await AsyncStorage.getItem('id')
    update(ref(db, 'Nurses/' + value), {
      name: name,
      email: email,
      username: phone
    }).then(() => {
      alert('data updated')
    })
    .catch((error) => {
      alert(error)
    })
  }

  useEffect(()=>{
    const ReadData = async()=>{
      const value = await AsyncStorage.getItem('id')
      const starCountRef = ref(db, 'Nurses/' + value);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setName(data.name);
        setEmail(data.email);
        setPhone(data.username);
      })
    } 
    ReadData();
  }, []);
>>>>>>> Stashed changes

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={handleGoBack}/>
      </View>
      <View style={styles.header}>
      <Text style={styles.mainTitle}>Edit profile</Text>
        <TouchableOpacity>
<<<<<<< Updated upstream
            <CorrectButton onPress={handleSaveProfile}/>
=======
          <CorrectButton onPress={actualizar} />
>>>>>>> Stashed changes
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('../resources/pictures/nurseProfile.png')}
          style={styles.profileImage}
        />
<<<<<<< Updated upstream
        <FormInput label={'Full name'} placeholder={'Jose Gordillo'} value={name} onChangeText={onChangeName}/>
        <FormInput label={'Phone number'} placeholder={'449-123-4567'} value={phone} onChangeText={onChangePhone}/>
        <FormInput label={'Email'} placeholder={'ejemplo@gmxil.com'} value={email} onChangeText={onChangeEmail}/>
=======
        <FormInput
          label={translationObject.fullName}
          placeholder="Jose Gordillo"
          value={name}
          onChangeText={(name) => {setName(name)}}
        />
        <FormInput
          label={translationObject.phone}
          placeholder="+521234567890"
          value={phone}
          onChangeText={(phone) => {setPhone(phone)}}
        />
        <FormInput
          label={translationObject.email}
          placeholder="Something@email.com"
          value={email}
          onChangeText={(email) => {setEmail(email)}}
        />
>>>>>>> Stashed changes
      </View>
    </SafeAreaView >
  )
}

//#region Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    profileContainer: {
      alignItems: 'left',
      marginVertical: 20,
      marginHorizontal:30,
    },
    profileImage: {
      width: 90,
      height: 90,
      borderRadius: 45,
    },
    mainTitle: {
      fontSize: 36,
      marginVertical: 5,
      marginHorizontal: 20,
      color: '#67A4F7',
      fontWeight: 'bold',
    },
    });
//#endregion    

export default EditAccount
