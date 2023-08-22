import {Image, Box, Center, Heading, Link, Text} from "native-base";
import React, { useContext, useState} from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import FormInput from "../utils/components/FormInput";
import PasswordImage from "../resources/pictures/PasswordImage.png";


import MainContainer from "../utils/components/MainContainer";

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';
import {firebaseConfig } from "../config";
import {initializeApp} from "firebase/app";
import {sendPasswordResetEmail, getAuth} from "firebase/auth";

const ForgotPass = ({ navigation }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];
  const [email, setEmail]= useState('');
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
 
  const ResetPassword = ()=>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
   alert("Password reset email sent!") })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

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
          {translationObject.forgetPass}
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
            {translationObject.dontWorry}
          </Heading>
          <FormInput  label={translationObject.passRecovery} 
          placeholder={translationObject.enterEmail} 
          onChangeText={(email)=> setEmail(email)}></FormInput>
          <BlueButton
            title={translationObject.sendCode} 
            onPress={() => {ResetPassword()} }//navigation.navigate(translationObject.OTPVerificationScreen)//}
          ></BlueButton>
        </Box>
        <Box safeArea w={"full"} py="2">
          <Center>
            <Text>
              {translationObject.rememberPass}{" "}
              <Link
                _text={{
                  fontSize: "m",
                  fontWeight: "500",
                  color: "indigo.500",
                  textDecoration: "none",
                }}
                alignSelf="flex-end"
                mt="1"
                onPress={() => navigation.navigate(translationObject.LoginScreen)}
              >
                {translationObject.login}
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
