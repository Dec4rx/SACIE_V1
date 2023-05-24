import {Box, Center, Heading, Link, Text, HStack, VStack} from "native-base";
import React, { useContext, useState } from "react";
import { Image } from "native-base";
import Enf_1 from "../MarcoImages/Enf_1.png";
import BlueButton from "../utils/components/BlueButton";
import BackButton from "../utils/components/BackButton";
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";
import MainContainer from "../utils/components/MainContainer";

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';
//import { firebase } from "../config.js";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {initializeApp} from "firebase/app";


import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import { firebaseConfig } from "../config";

const Login = ({ navigation }) => {
  const [fontsLoaded] = useFonts({Lato_400Regular});

  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

   const [email, setEmail]= useState('');
   const [password, setPassword]= useState('');
   const app = initializeApp(firebaseConfig)
   const auth = getAuth(app)
  
  const loginUser= async(email,password)=>{
      
    signInWithEmailAndPassword(auth,email, password).then((userCredential)=>{
      console.log('usuarioLogeado')
    })
    navigation.navigate("Drawer")
  }
  return (
    <MainContainer>
      <Center safeArea alignContent={"center"}>
        <Box safeArea alignContent={"center"}>
          <Heading
            style={{ fontSize: 32, fontFamily: "Lato_400Regular", marginVertical: 20, fontWeight:"bold" }}
            textAlign={"center"}
          >
            {translationObject.login}
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
                label={translationObject.email}
                placeholder="Something@email.com"
                onChangeText={(email)=> setEmail(email)}
                
              ></FormInput>
              <FormInputPass
                label={translationObject.password}
                placeholder={translationObject.password}
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
                onPress={() => navigation.navigate(translationObject.ForgotPasswordScreen)}
              >
                {translationObject.forgetPass}
              </Link>
            </Box>

            <BlueButton
              title={translationObject.login}
              onPress={() => loginUser(email,password)}
              mt="2"
              color="2BF0D7"
            ></BlueButton>
            <Center>
              <HStack justifyContent={"center"}>
                <Text>
                {translationObject.noAccount}{" "}
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
                    onPress={() => navigation.navigate(translationObject.SignUpScreen)}
                  >
                    {translationObject.signup}
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
