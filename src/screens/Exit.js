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
  Checkbox,
  Image,
} from "native-base";
import { useState } from "react";

import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import CorrectButton from "../utils/components/CorrectButton";
import ErrorButton from '../utils/components/ErrorButton';

import ScreenNames from "../utils/ScreenNames";

import data from "../utils/Strings/StringsEng.json"

const Exit = ({navigation}) => {
  const [state, setState] = useState(false);
  return (
    <Box
      p="3"
      alignContent={"center"}
      w="100%"
      height={"100%"}
      flex={1}
      backgroundColor={"white"}
    >
      <Center mt={'30'}>
        <Text textAlign={"center"} fontSize={30}>
          {data.Exit.Quitting}
        </Text>
      </Center>
      <Center mb={10}>
        <Image
          source={require("../resources/pictures/Bye.png")}
          resizeMode="contain"
          w={"400"}
          h={"400"}
        ></Image>
        <Text fontSize={30}>{data.Exit.RSure}</Text>
        <HStack space={10} mt={5}>
            <CorrectButton onPress={()=>navigation.navigate(ScreenNames.LoginScreen)}/>
            <ErrorButton onPress={()=>navigation.goBack()}/>
        </HStack>
      </Center>
    </Box>
  );
};

export default Exit;
