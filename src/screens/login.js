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
import React, { useState } from "react";
import { Image, NativeBaseProvider } from "native-base";
import Enf_1 from "../MarcoImages/Enf_1.png";
import BlueButton from "../utils/components/BlueButton";
import BackButton from "../utils/components/BackButton";
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";
import MainContainer from "../utils/components/MainContainer";

import { firebase } from "../config.js";


import data from "../utils/Strings/StringsEng.json";

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

const Login = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  
  loginUser= async(email,password)=>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
    }catch(error){
      alert(error.message)
    }
  }
  return (
    <MainContainer>
      <Center safeArea alignContent={"center"}>
        <Box safeArea alignContent={"center"}>
          <Heading
            style={{ fontSize: 32, fontFamily: "Lato_400Regular", marginVertical: 20, fontWeight:"bold" }}
            textAlign={"center"}
          >
            {data.Login.Login}
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
                label={data.Login.EmailID}
                placeholder={data.Login.Email}
                onChangeText={(email)=> setEmail(email)}
                
              ></FormInput>
              <FormInputPass
                label={data.Login.Password}
                placeholder={data.Login.Password}
                onChangeText={(password)=> setPassword(password)}
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
                {data.Login.PasswordF}
              </Link>
            </Box>

            <BlueButton
              title={data.Login.Login}
              onPress={() => loginUser(email,password)}
              mt="2"
              color="2BF0D7"
            ></BlueButton>
            <Center>
              <HStack justifyContent={"center"}>
                <Text>
                  {data.Login.DontHaveAccount}{" "}
                  <Link
                    justifyContent={"center"}
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
                    {data.Login.SignUp}
                  </Link>
                </Text>
              </HStack>
            </Center>
          </VStack>
        </Box>
      </Center>
    </MainContainer>
  );
};

export default Login;
