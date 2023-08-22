import { Box, Center, Heading } from "native-base";
import React, {useContext} from "react";
import BlueButton from "../utils/components/BlueButton";
import FormInputPass from "../utils/components/FormInputPass";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const PasswordChanged = ({ navigation }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <MainContainer>
      <Box safeArea py={5} w={'full'}>
        <Center mb={2}>
        
        <Heading style={{ fontSize: 28 }} fontWeight="semibold">
          {translationObject.createPass} 
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          fontSize={16}
          textAlign={"left"}
        >
          {translationObject.newPass}{" "}
        </Heading>
        </Center>

        <FormInputPass
          label={translationObject.newPassPH}
          placeholder={translationObject.minPass}
        ></FormInputPass>
        <FormInputPass
          label={translationObject.confirmPass}
          placeholder={translationObject.identPass}
        ></FormInputPass>

        <BlueButton
          title={translationObject.resetPass}
          onPress={() => navigation.navigate(translationObject.ResetPasswordScreen)}
        ></BlueButton>
      </Box>
    </MainContainer>
  );
};
export default PasswordChanged;
