import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: 65,
      height: 65,
      margin: 8
    },
    placeholder: {
      fontFamily: "roboto-regular",
      color: "#828282",
      height: 65,
      width: 65,
      borderWidth: 1,
      borderColor: "rgba(103,164,247,1)",
      borderRadius: 12,
      backgroundColor: "rgba(255,253,253,1)",
      fontSize: 35,
      textAlign: "center"
    }
  });
function NumericInput(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.placeholder}
        placeholder="0"
        keyboardType="number-pad"
      ></TextInput>
    </View>
  );
}



export default NumericInput;
