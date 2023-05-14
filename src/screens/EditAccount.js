import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import FormInput from "../utils/components/FormInput";
import BackButton from "../utils/components/BackButton";
import CorrectButton from "../utils/components/CorrectButton";

import MainContainer from "../utils/components/MainContainer";

import data from "../utils/Strings/StringsEng.json"

const EditAccount = ({ navigation }) => {
  const [name, onChangeName] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  const handleSaveProfile = () => {
    navigation.navigate("Account");
  };

  return (
    <MainContainer>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.mainTitle}>{data.EditAccount.EditProfile}</Text>
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
          label={data.EditAccount.FullName}
          placeholder={data.EditAccount.FName}
          value={name}
          onChangeText={onChangeName}
        />
        <FormInput
          label={data.EditAccount.Phone}
          placeholder={data.EditAccount.NPhone}
          value={phone}
          onChangeText={onChangePhone}
        />
        <FormInput
          label={data.EditAccount.EmailID}
          placeholder={data.EditAccount.Email}
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
