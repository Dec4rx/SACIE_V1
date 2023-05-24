import { Image, Box, Center, Heading, Link, Text, VStack, Checkbox,} from "native-base";
import React, { useContext } from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import Enf_2 from "../MarcoImages/Enf_2.png";
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";

import ScreenNames from "../utils/ScreenNames";
import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

import data from "../utils/Strings/StringsEsp.json"

const Signup = ({ navigation }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

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
          {translationObject.signup}
        </Heading>
        <Box safeArea py="8" w={"full"}>
          <VStack space={3} mt="5">
            <FormInput label={translationObject.name}></FormInput>
            <FormInput label={translationObject.lastName}></FormInput>
            <FormInput label={translationObject.email}></FormInput>
            <FormInputPass
              label={translationObject.password}
              placeholder={translationObject.minPass}
            ></FormInputPass>
            <FormInputPass
              label={translationObject.confirmPass}
              placeholder={translationObject.identPass}
            ></FormInputPass>

            <BlueButton
              title={translationObject.signup}
              onPress={() => navigation.navigate(translationObject.MenuScreen)}
            ></BlueButton>
            <Center>
              <Text>
                {translationObject.yesAccount}
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
            <Center>
              <Checkbox fontSize={"md"}>
                {translationObject.policy}
                <Link
                  onPress={() =>
                    navigation.navigate(
                      translationObject.TermnsAndConditionsCheckBoxScreen
                    )
                  }
                  my={"auto"}
                  _text={{ fontSize: "m", color: "indigo.500", fontWeight: '500', textDecoration: 'none' }}
                >
                  {translationObject.tAndC}
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
