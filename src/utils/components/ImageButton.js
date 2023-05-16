import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { HStack, Box } from "native-base";

//#region Styles
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#67A4F7",
    borderColor: "#DFDFDF",
    padding: 0,
    borderRadius: 24,
    borderWidth: 1.5,
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
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
    textSize: "14",
    marginStart: 10,
    marginVertical: "auto",
  },
});
//#endregion

const ImageButton = ({ onPress, image, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <HStack w={'full'} p={3} justifyContent={'center'}>
        <Box w={"30%"}>
          <Image
            source={image} // Ruta de la imagen
            style={{
              width: 50,
              height: 50,
              marginVertical: "auto",
            }}
          />
        </Box>
        <Box w={'70%'}>
          <Text style={styles.buttonText}>{title}</Text>
        </Box>
      </HStack>
    </TouchableOpacity>
  );
};

export default ImageButton;
