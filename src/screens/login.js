import {
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
  Drawer,
} from "native-base";
import React from "react";
import { Image, NativeBaseProvider } from "native-base";
import Enf_1 from "../MarcoImages/Enf_1.png";
import BlueButton from "../utils/components/BlueButton";
import BackButton from "../utils/components/BackButton";
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";
import MainContainer from "../utils/components/MainContainer";

const Login = ({ navigation }) => {
  return (
    <MainContainer>
      <Center safeArea alignContent={"center"}>
        <Box safeArea alignContent={"center"}>
          <Heading
            style={{ fontSize: 32 }}
            textAlign={"center"}
            fontWeight="semibold"
          >
            Login
          </Heading>
        </Box>
        <Image
          style={{
            width: 175,
            height: 250,
          }}
          source={Enf_1}
          size="xl"
        />
        <Box safeArea w={"100%"}>
          <VStack space={4} mt="5">
            <Box>
              <FormInput
                label="Email"
                placeholder={"Something@email.com"}
              ></FormInput>
              <FormInputPass
                label="Password"
                placeholder={"Password"}
              ></FormInputPass>
              <Link
                _text={{
                  fontSize: "m",
                  fontWeight: "500",
                  color: "indigo.500",
                  textDecoration: "none",
                }}
                alignSelf="flex-end"
                onPress={() => navigation.navigate(screen.ForgotPasswordScreen)}
              >
                Forget Password?
              </Link>
            </Box>

            <BlueButton
              title={"Log in"}
              onPress={() => navigation.navigate("Drawer")}
              mt="2"
              color="2BF0D7"
            ></BlueButton>
            <Center>
              <HStack justifyContent={"center"}>
                <Text>Already have an account? <Link justifyContent={'center'}
                  _text={{
                    fontSize: "m",
                    fontWeight: "500",
                    color: "indigo.500",
                    textDecoration: "none",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                  onPress={() => navigation.navigate(screen.SignUpScreen)}
                >
                  Sign up
                </Link></Text>
                
              </HStack>
            </Center>
          </VStack>
        </Box>
      </Center>
    </MainContainer>
  );
};

export default Login;
