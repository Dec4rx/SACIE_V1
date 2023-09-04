import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FormInput from "../utils/components/FormInput";
import BackButton from "../utils/components/BackButton";
import CorrectButton from "../utils/components/CorrectButton";

import MainContainer from "../utils/components/MainContainer";

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

import { onValue, ref, update } from "firebase/database";
import { firebaseConfig } from "../config";
import {initializeApp } from "firebase/app";
import { db } from "../Database";

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
      navigation.navigate(translationObject.AccountScreen)
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

  return (
    <MainContainer>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.mainTitle}>{translationObject.editProfile}</Text>
        <TouchableOpacity>
          <CorrectButton onPress={actualizar} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../resources/pictures/nurseProfile.png")}
          style={styles.profileImage}
        />
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
          onChangeText={(phone) => {setName(phone)}}
        />
        <FormInput
          label={translationObject.email}
          placeholder="Something@email.com"
          value={email}
          onChangeText={(email) => {setName(email)}}
        />
      </View>
    </MainContainer>
  );
};

//#region Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
  },
  profileContainer: {
    alignItems: "left",
    marginVertical: 20,
    marginHorizontal: 0,
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
    color: "#67A4F7",
    fontWeight: "bold",
  },
});
//#endregion

export default EditAccount;
