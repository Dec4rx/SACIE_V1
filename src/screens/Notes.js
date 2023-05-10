import React from "react";
import {
  TextArea,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Divider,
  View,
} from "native-base";
import { StretchInX } from "react-native-reanimated";

const Notes = () => {
  return (
    <Box alignItems="center" flex={1}>
      <TextArea
        h={"full"}
        borderRadius={20}
        placeholder="Text Area Placeholder"
        backgroundColor={"#E6EBEE"}
        w="90%"
      />
    </Box>
  );
};

const NotesScreen = () => {
  return (
    <Box
      p="2"
      m="3"
      alignContent={"center"}
      w="100%"
      height={"100%"}
      flex={1}
      backgroundColor={"white"}
    >
      <Text textAlign={"center"} fontSize={40}>
        NOTES
      </Text>
      <Divider my="2" />
      <Notes />
    </Box>
  );
};

export default NotesScreen;
