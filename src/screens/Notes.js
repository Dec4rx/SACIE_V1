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

import color from "../utils/Colors";

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
    <Box backgroundColor={color.White}
      m="3"
      p={1}
      height={'98%'}
      alignContent={"center"}
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
