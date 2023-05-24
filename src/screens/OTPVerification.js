import { Box, Center, Heading, Link, Text, HStack } from "native-base";
import React, {useContext} from "react";
import BlueButton from "../utils/components/BlueButton";
import NumericInput from "../utils/components/NumericInput";

import ScreenNames from "../utils/ScreenNames";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const OTPVerification = ({ navigation }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <MainContainer>
        <Center safeArea pt="8">
          <Heading style={{ fontSize: 32 }} fontWeight="semibold" >
            {translationObject.otp}
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
             {translationObject.enterCode}
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
              title={translationObject.verify}
              onPress={() => navigation.navigate(translationObject.PasswordChangedScreen)}
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
                {translationObject.noCode} <Link
                _text={{
                  fontSize: "m",
                  fontWeight: "500",
                  color: "indigo.500",
                  textDecoration: 'none'
                }}
                alignSelf="flex-end"
                mt="1" >
                {translationObject.resend}
              </Link>
              </Text>
            </Center>
          </Box>
        </Center>
    </MainContainer>
  );
};
export default OTPVerification;
