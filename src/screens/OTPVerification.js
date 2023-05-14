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
import NumericInput from "../utils/components/NumericInput";

import ScreenNames from "../utils/ScreenNames";

import MainContainer from "../utils/components/MainContainer";

import data from "../utils/Strings/StringsEng.json"

const OTPVerification = ({ navigation }) => {
  return (
    <MainContainer>
        <Center safeArea pt="8">
          <Heading style={{ fontSize: 32 }} fontWeight="semibold" >
            {data.OTPVerification.OTPV}
          </Heading>
          <Center w={'full'} pt="8">
            <Heading
            textAlign={'left'}
              mt="1"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="medium"
              size="s"
            >
             {data.OTPVerification.EnterCode}
            </Heading>
          </Center>
          <HStack justifyContent={'center'} w={'full'} pt="8">
            <NumericInput placeholder={"0"}/>
            <NumericInput placeholder={"0"}/>
            <NumericInput placeholder={"0"}/>
            <NumericInput placeholder={"0"}/>
          </HStack>
          <Box w={'full'} pt="16">
            <BlueButton
              title={data.OTPVerification.Verify}
              onPress={() => navigation.navigate(ScreenNames.PasswordChangedScreen)}
            ></BlueButton>
          </Box>
          <Box safeArea mt={"full"} w={'full'}>
            <Center>
              <Text
                mt="1"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="medium"
                size="s"
              >
                {data.OTPVerification.DidntCode} <Link
                _text={{
                  fontSize: "m",
                  fontWeight: "500",
                  color: "indigo.500",
                  textDecoration: 'none'
                }}
                alignSelf="flex-end"
                mt="1"
              >
                {data.OTPVerification.Resend}
              </Link>
              </Text>
            </Center>
          </Box>
        </Center>
    </MainContainer>
  );
};
export default OTPVerification;
