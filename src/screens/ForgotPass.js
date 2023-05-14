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
          Forgot Password?
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
            Don't worry! It occurs. Please enter the email address linked with
            your account.
          </Heading>
          <FormInput  label={'Password recovery'} placeholder={"Enter your email"}></FormInput>
          <BlueButton
            title={"Send Code"}
            onPress={() => navigation.navigate(screen.OTPVerificationScreen)}
          ></BlueButton>
        </Box>
        <Box safeArea w={"full"} py="2">
          <Center>
            <Text>
              Remember password?{" "}
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
