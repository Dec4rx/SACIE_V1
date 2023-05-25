import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import BackButton from "../utils/components/BackButton";
import EditButton from "../utils/components/EditButton";
import { translations } from "../utils/Strings/Lenguage"
import MainContainer from "../utils/components/MainContainer";
import { I18nContext } from '../utils/components/I18nProvider';

import { onValue, ref } from "firebase/database";
import { firebaseConfig } from "../config";
import {initializeApp } from "firebase/app";
import { db } from "../Database";

import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = ({ navigation }) => {

  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState(null);

  const app = initializeApp(firebaseConfig)

  useEffect(()=>{
    const ReadData = async()=>{
      const value = await AsyncStorage.getItem('id')
      console.log("Si lo trae " +value)
      const starCountRef = ref(db, 'Nurses/' + value);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setName(data.name);
        setEmail(data.email);
        setPhone(data.password);
      })
    } 
    ReadData();
  }, []);

  return (
    <MainContainer>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.mainTitle}>{translationObject.profile}</Text>
        <EditButton onPress={() => navigation.navigate(translationObject.EditAccountScreen)} />
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../resources/pictures/nurseProfile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.info}>
        <Image
          source={require("../resources/pictures/phone.svg")}
          style={styles.otherImg}
        />
        <Text style={styles.text}>{phone}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.info}>
        <Image
          source={require("../resources/pictures/mail.svg")}
          style={styles.otherImg}
        />
        <Text style={styles.text}>{email}</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <View style={styles.footer}>
          <Text style={styles.logout}>{translationObject.logout}</Text>
        </View>
      </TouchableOpacity>
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
  otherImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
  },
  mainTitle: {
    fontSize: 36,
    marginVertical: 5,
    marginHorizontal: 0,
    color: "#67A4F7",
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    marginHorizontal: 0,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  line: {
    borderBottomColor: "#FF103E",
    borderBottomWidth: 5,
  },
  footer: {
    alignItems: "center",
    marginHorizontal: 0,
    marginVertical: 70,
  },
  logout: {
    fontSize: 20,
    color: "#FF103E",
    textDecoration: "underline",
  },
});
//#endregion

export default Account;
