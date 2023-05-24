import { Image, Box, Center, Heading } from "native-base";
import React, { useContext } from "react";
import BlueButton from "../utils/components/BlueButton";
import Likeimage from "../MarcoImages/Likeimage.png";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const ResetPassword = ({ navigation }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

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
            {translationObject.passChange}
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
              {translationObject.passSuccess}
            </Heading>
          </Box>
          <Box safeArea  p="2" py="8" w="90%" maxW="300">
            <BlueButton
              title={translationObject.back2Login}
              onPress={() => navigation.navigate(translationObject.LoginScreen)}
            ></BlueButton>
          </Box>
        </Center>
    </MainContainer>
  );
};
export default ResetPassword;
