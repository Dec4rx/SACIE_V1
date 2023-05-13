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
} from "native-base";
import { useState } from "react";

import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";

import ScreenNames from "../utils/ScreenNames";

const TermsAndConditions = ({navigation}) => {
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
      <HStack justifyContent={"space-between"} alignContent={"center"}>
        <Box justifyContent={"center"}>
          <BackButton />
        </Box>
        <Box>
          <Text textAlign={"center"} fontSize={30}>
            Terms & conditions
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
        <Text textAlign={"center"} fontSize={"15"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vulputate felis lectus, id commodo sapien ornare non. Praesent aliquam
          sodales odio in efficitur. Vestibulum non nunc magna. Mauris aliquam
          semper pharetra. Mauris malesuada ac felis eu varius. Aliquam erat
          volutpat. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Proin sit amet varius sem. Maecenas
          vel velit ac lacus sodales suscipit.
        </Text>
        <Center my={2}>
          <Checkbox _checked={state}  onChange={(e)=> setState(!state)}>I agree with terms and conditions</Checkbox>
        </Center>

      </Box>
      <BlueButton title={"Continue"}  onPress={()=>navigation.navigate(ScreenNames.SignUpScreen)} disabled={!state}/>
    </Box>
  );
};

export default TermsAndConditions;
