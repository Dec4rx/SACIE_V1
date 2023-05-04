import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
//import Icon from 'react-native-vector-icons/FontAwesome';

//#region Styles
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#2BF0D7",
    padding: 10,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#000",
    fontWeight: "normal",
    textAlign: "center",
    textSize: "20",
    marginLeft: 10,
  },
});
//#endregion

const MyButton = ({ onPress, icon, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name={icon} size={18} color="#000" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
