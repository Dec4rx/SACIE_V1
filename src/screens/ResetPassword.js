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
import Likeimage from "../MarcoImages/Likeimage.png";

import MainContainer from "../utils/components/MainContainer";

import data from "../utils/Strings/StringsEng.json";

const ResetPassword = ({ navigation }) => {
  return (
    <MainContainer>
        <Center safeArea   w={'full'}>
          <Image
            mb={2}
            style={{
              width: 250,
              height: 250,
            }}
            source={Likeimage}
            size="xl"
          />
          <Heading style={{ fontSize: 28 }} fontWeight="semibold">
            {data.ResetPassword.PasswordChan}
          </Heading>
          <Box safeArea p="1" py="4" w="90%" maxW="300">
            <Heading
              mt="1"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="medium"
              fontSize={16}
              textAlign={"center"}
            >
              {data.ResetPassword.PassSuc}
            </Heading>
          </Box>
          <Box safeArea  p="2" py="8" w="90%" maxW="300">
            <BlueButton
              title={data.ResetPassword.BackLogin}
              onPress={() => navigation.navigate(screen.LoginScreen)}
            ></BlueButton>
          </Box>
        </Center>
    </MainContainer>
  );
};
export default ResetPassword;
