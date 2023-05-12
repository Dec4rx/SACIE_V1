import React from "react";
import {
  TextArea,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Divider,
  View,
  IconButton,
  HStack,
} from "native-base";
import { StretchInX } from "react-native-reanimated";

import Icon from "react-native-vector-icons/AntDesign";

import BackButton from "../utils/components/BackButton";

const Notes = () => {
  return (
    <Box alignItems="center" flex={1}>
      <TextArea
        h={"full"}
        borderRadius={20}
        placeholder="Text Area Placeholder"
        backgroundColor={"#E6EBEE"}
        w={"full"}
      />
    </Box>
  );
};

const NotesScreen = () => {
  return (
    <Box
      p="3"
      alignContent={"center"}
      w="100%"
      height={"100%"}
      flex={1}
      backgroundColor={"white"}
    >
      <HStack justifyContent={"space-between"} alignContent={"center"}>
        <Box justifyContent={"center"}>
          <BackButton />
        </Box>
        <Box>
          <Text textAlign={"center"} fontSize={40}>
            NOTES
          </Text>
        </Box>
        <Box justifyContent={"center"} backgroundColor={'#2BF0D7'} borderRadius={'full'}>
          <IconButton p={2} icon={<Icon name="save" size={40} />} />
        </Box>
      </HStack>

      <Divider my="2" />
      <Notes />
    </Box>
  );
};

export default NotesScreen;
