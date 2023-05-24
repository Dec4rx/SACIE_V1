import React, { useContext } from "react";
import { Box, Center, Text, Divider, HStack, Checkbox } from "native-base";
import { useState } from "react";

import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";

import ScreenNames from "../utils/ScreenNames";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

import data from "../utils/Strings/StringsEsp.json"

const TermsAndConditions = ({ navigation }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const [state, setState] = useState(false);
  return (
    <MainContainer>
      <Box
        alignContent={"center"}
        w={'full'}
        height={"100%"}
        flex={1}
      >
        <HStack justifyContent={"space-between"} alignContent={"center"}>
          <Box justifyContent={"center"}>
            <BackButton />
          </Box>
          <Box>
            <Text textAlign={"center"} fontSize={30}>
              {translationObject.tAndC}
            </Text>
          </Box>
          <Box
            justifyContent={"center"}
            backgroundColor={"#2BF0D7"}
            borderRadius={"full"}
          ></Box>
        </HStack>

        <Divider my="2" />
        <Box p={2} my={3}>
          <Text textAlign={"center"} fontSize={"15"}>
            {translationObject.txtTandC}
          </Text>
          <Center my={2}>
            <Checkbox _checked={state} onChange={(e) => setState(!state)}>
              {translationObject.agree}
            </Checkbox>
          </Center>
        </Box>
        <BlueButton
          title={translationObject.continue}
          onPress={() => navigation.navigate(translationObject.SignUpScreen)}
          disabled={!state}
        />
      </Box>
    </MainContainer>
  );
};

export default TermsAndConditions;
