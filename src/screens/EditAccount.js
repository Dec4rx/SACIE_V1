import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FormInput from "../utils/components/FormInput";
import BackButton from "../utils/components/BackButton";
import CorrectButton from "../utils/components/CorrectButton";

import MainContainer from "../utils/components/MainContainer";

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const EditAccount = ({ navigation }) => {
  const [name, onChangeName] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const handleSaveProfile = () => {
    navigation.navigate(translationObject.AccountScreen);
  };

  return (
    <MainContainer>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.mainTitle}>{translationObject.editProfile}</Text>
        <TouchableOpacity>
          <CorrectButton onPress={handleSaveProfile} />
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
          onChangeText={onChangeName}
        />
        <FormInput
          label={translationObject.phone}
          placeholder="+521234567890"
          value={phone}
          onChangeText={onChangePhone}
        />
        <FormInput
          label={translationObject.email}
          placeholder="Something@email.com"
          value={email}
          onChangeText={onChangeEmail}
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
