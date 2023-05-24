import React, { useContext } from "react";
import { TextArea, Box, Text, Divider, IconButton, HStack } from "native-base";

import Icon from "react-native-vector-icons/AntDesign";

import BackButton from "../utils/components/BackButton_Especial";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const Notes = () => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <Box alignItems="center" flex={1}>
      <TextArea
        h={"full"}
        borderRadius={20}
        placeholder={translationObject.notes}
        backgroundColor={"#E6EBEE"}
        w={"full"}
      />
    </Box>
  );
};

const NotesScreen = () => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];
  
  return (
    <Box
      p="3"
      alignContent={"center"}
      w="100%"
      height={"100%"}
      flex={1}
      backgroundColor={"white"}
    >
      <HStack justifyContent={"space-between"} alignContent={"center"}>
        <Box justifyContent={"center"}>
          <BackButton />
        </Box>
        <Box>
          <Text textAlign={"center"} fontSize={40}>
          {translationObject.notes}
          </Text>
        </Box>
        <Box justifyContent={"center"} backgroundColor={'#2BF0D7'} borderRadius={'full'}>
          <IconButton p={2} icon={<Icon name="save" size={40} />} />
        </Box>
      </HStack>

      <Divider my="2" />
      <Notes />
    </Box>
  );
};

export default NotesScreen;
