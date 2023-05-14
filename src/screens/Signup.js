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
  Checkbox,
} from "native-base";
import React from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import Enf_2 from "../MarcoImages/Enf_2.png";
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";

import ScreenNames from "../utils/ScreenNames";
import MainContainer from "../utils/components/MainContainer";

const Signup = ({ navigation }) => {
  return (
    <MainContainer>
      <Center>
        <Box safeArea w={"full"} py="8" flexDirection={"row"}>
          <BackButton />
        </Box>
        <Image
          style={{
            width: 250,
            height: 250,
          }}
          source={Enf_2}
          size="xl"
        />
        <Heading style={{ fontSize: 32 }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <Box safeArea py="8" w={"full"}>
          <VStack space={3} mt="5">
            <FormInput label="Name"></FormInput>
            <FormInput label="Last Name"></FormInput>
            <FormInput label="Email"></FormInput>
            <FormInputPass
              label="Password"
              placeholder={"Minimum Password-lenght 8 Characters"}
            ></FormInputPass>
            <FormInputPass
              label="Confirm Password"
              placeholder={"Password must be identical"}
            ></FormInputPass>

            <BlueButton
              title={"Sign Up"}
              onPress={() => alert("No hay Home")}
            ></BlueButton>
            <Center>
              <Text>
                Already have an account?{" "}
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
            <Center>
              <Checkbox fontSize={"md"}>
                I've already read the policy of 
                <Link
                  onPress={() =>
                    navigation.navigate(
                      ScreenNames.TermnsAndConditionsCheckBoxScreen
                    )
                  }
                  my={"auto"}
                  _text={{ fontSize: "m", color: "indigo.500", fontWeight: '500', textDecoration: 'none' }}
                >
                  Terms and Conditions
                </Link>
              </Checkbox>
            </Center>
          </VStack>
        </Box>
      </Center>
    </MainContainer>
  );
};

export default Signup;
