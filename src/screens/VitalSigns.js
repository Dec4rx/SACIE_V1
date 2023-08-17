import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Center, HStack } from "native-base";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

import BackButton from "../utils/components/BackButton_Especial";

const VitalSigns = ({ navigation }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <MainContainer>
      <Center>
        <HStack>
          <BackButton />
          <Text style={styles.mainTitle}>{translationObject.vitalSigns}</Text>
        </HStack>
        <View
          style={{
            borderBottomColor: "#F5F5F5",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 5,
          }}
        />

        {/* Division */}

        <View style={styles.imageRow}>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => navigation.navigate(translationObject.SugarBloodScreen)}
          >
            <Image
              source={require("../resources/pictures/SugarBlood.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icons}
            onPress={() => navigation.navigate(translationObject.TemperatureScreen)}
          >
            <Image
              source={require("../resources/pictures/Temperature.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icons}
            onPress={() => navigation.navigate(translationObject.HeartRateScreen)}
          >
            <Image
              source={require("../resources/pictures/HeartRate.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icons}
            onPress={() => navigation.navigate(translationObject.BloodPressureScreen)}
          >
            <Image
              source={require("../resources/pictures/BloodPreasure.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icons}
            onPress={() =>
              navigation.navigate(translationObject.BreathingFrequencyScreen)
            }
          >
            <Image
              source={require("../resources/pictures/BreathingFrequency.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icons}
            onPress={() => navigation.navigate(translationObject.OxigenScreen)}
          >
            <Image
              source={require("../resources/pictures/Oxygenation.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icons}
            onPress={() =>
              navigation.navigate(translationObject.HealthConditionScreen)
            }
          >
            <Image
              source={require("../resources/pictures/HealtCondition.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </TouchableOpacity>
        </View>
      </Center>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: "50%",
    padding: 5,
    marginHorizontal: "auto",
  },

  mainTitle: {
    textAlign: "center",
    fontSize: 36,
    color: "#000000",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  image: {
    //ok
    width: 150,
    height: 150,
    marginHorizontal: "auto",
  },
  imageRow: {
    // //ok
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
});

export default VitalSigns;
