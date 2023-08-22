import React, { useContext } from "react";
import { Box, Center, Text, HStack, Image } from "native-base";
import { useState } from "react";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

import CorrectButton from "../utils/components/CorrectButton";
import ErrorButton from '../utils/components/ErrorButton';

const Exit = ({navigation}) => {
  const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];
  const [state, setState] = useState(false);

  return (
    <Box
      p="3"
      alignContent={"center"}
      w="100%"
      height={"100%"}
      flex={1}
      backgroundColor={"white"}
    >
      <Center mt={'30'}>
        <Text textAlign={"center"} fontSize={30}>
          {translationObject.quitting}
        </Text>
      </Center>
      <Center mb={10}>
        <Image
          source={require("../resources/pictures/Bye.png")}
          resizeMode="contain"
          w={"400"}
          h={"400"}
        ></Image>
        <Text fontSize={30}>{translationObject.rUSure}</Text>
        <HStack space={10} mt={5}>
            <CorrectButton onPress={()=>navigation.navigate(translationObject.LoginScreen)}/>
            <ErrorButton onPress={()=>navigation.goBack()}/>
        </HStack>
      </Center>
    </Box>
  );
};

export default Exit;
