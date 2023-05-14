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
  Bottom,
} from "native-base";
import { StretchInX } from "react-native-reanimated";

import Icon from "react-native-vector-icons/AntDesign";

import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";

import data from "../utils/Strings/StringsEng.json";



const TermsAndConditionsTxt = () => {
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
          <Text textAlign={"center"} fontSize={30}>
            {data.TandC.TandC}
          </Text>
        </Box>
        <Box
          justifyContent={"center"}
          backgroundColor={"#2BF0D7"}
          borderRadius={"full"}
        ></Box>
      </HStack>

      <Divider my="2" />
      <Box p={2} my={3}>
        <Text textAlign={'center'} fontSize={'15'}>
          {data.TandC.TandC}
        </Text>
      </Box>
      <BlueButton title={data.TandC.Continue} />
    </Box>
  );
};

export default TermsAndConditionsTxt;
