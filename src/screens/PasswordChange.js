import {
  NativeBaseProvider,
  Image,
  Box,
  Center,
  Heading,
  FormControl,
  Input,
  Button,
  Link,
  Text,
  HStack,
  VStack,
  Row,
} from "native-base";
import React from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import FormInputPass from "../utils/components/FormInputPass";


import ScreenNames from "../utils/ScreenNames";

import MainContainer from "../utils/components/MainContainer";

import data from "../utils/Strings/StringsEng.json";

const PasswordChanged = ({ navigation }) => {
  return (
    <MainContainer>
      <Box safeArea py={5} w={'full'}>
        <Center mb={2}>
        
        <Heading style={{ fontSize: 28 }} fontWeight="semibold">
          {data.PasswordChanged.CNewPass} 
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          fontSize={16}
          textAlign={"left"}
        >
          {data.PasswordChanged.NewPass}{" "}
        </Heading>
        </Center>

        <FormInputPass
          label={data.PasswordChanged.NPass}
          placeholder={data.PasswordChanged.MinPass}
        ></FormInputPass>
        <FormInputPass
          label={data.PasswordChanged.ConfPass}
          placeholder={data.PasswordChanged.IdentPass}
        ></FormInputPass>

        <BlueButton
          title={data.PasswordChanged.ResPass}
          onPress={() => navigation.navigate(ScreenNames.ResetPasswordScreen)}
        ></BlueButton>
      </Box>
    </MainContainer>
  );
};
export default PasswordChanged;
