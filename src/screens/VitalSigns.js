import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Center, HStack} from "native-base";

import ScreenNames from "../utils/ScreenNames";

import MainContainer from "../utils/components/MainContainer";

const VitalSigns = ({ navigation }) => {
  return (
    <MainContainer>
      <Center>
        <Text style={styles.mainTitle}>Vital Signs</Text>
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
              onPress={() => navigation.navigate(ScreenNames.SugarBloodScreen)}
            >
     <Image
                source={require("../resources/pictures/SugarBlood.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          

        
            <TouchableOpacity
              style={styles.icons}
              onPress={() => navigation.navigate(ScreenNames.TemperatureScreen)}
            >
              <Image
                source={require("../resources/pictures/Temperature.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          

        
            <TouchableOpacity
              style={styles.icons}
              onPress={() => navigation.navigate(ScreenNames.HeartRateScreen)}
            >
              <Image
                source={require("../resources/pictures/HeartRate.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          

        
            <TouchableOpacity
              style={styles.icons}
              onPress={() =>
                navigation.navigate(ScreenNames.BloodPressureScreen)
              }
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
                navigation.navigate(ScreenNames.BreathingFrequencyScreen)
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
              onPress={() => navigation.navigate(ScreenNames.OxigenScreen)}
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
                navigation.navigate(ScreenNames.HealthConditionScreen)
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
    marginHorizontal: 'auto'
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
    marginHorizontal: 'auto',
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
