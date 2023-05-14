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
import FormInput from "../utils/components/FormInput";
import PasswordImage from "../MarcoImages/PasswordImage.png";

import MainContainer from "../utils/components/MainContainer";

import data from "../utils/Strings/StringsEng.json"

const ForgotPass = ({ navigation }) => {
  return (
    <MainContainer>
      <Center w={"full"}>
        <Box safeArea py="8" w={"full"}>
          <BackButton />
        </Box>
        <Heading
          size="xl"
          color="Black"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="semibold"
        >
          {data.ForgotPassword.ForgotPassword}
        </Heading>
        <Box safeArea w={"full"} py="8">
          <Heading
            my="2"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="xs"
          >
            {data.ForgotPassword.DontWorry}
          </Heading>
          <FormInput  label={data.ForgotPassword.PasswordReco} placeholder={data.ForgotPassword.EnterEmail}></FormInput>
          <BlueButton
            title={data.ForgotPassword.SendCode}
            onPress={() => navigation.navigate(screen.OTPVerificationScreen)}
          ></BlueButton>
        </Box>
        <Box safeArea w={"full"} py="2">
          <Center>
            <Text>
              {data.ForgotPassword.RememberPassword}{" "}
              <Link
                _text={{
                  fontSize: "m",
                  fontWeight: "500",
                  color: "indigo.500",
                  textDecoration: "none",
                }}
                alignSelf="flex-end"
                mt="1"
                onPress={() => navigation.navigate(screen.LoginScreen)}
              >
                Login
              </Link>
            </Text>
          </Center>
        </Box>
        <Image
          style={{
            width: 300,
            height: 300,
          }}
          source={PasswordImage}
          size="xl"
        />
      </Center>
    </MainContainer>
  );
};
export default ForgotPass;
