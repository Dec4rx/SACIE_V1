import React, { useContext } from "react";
import { Box, Center, Text, Divider, HStack, FormControl, Input, VStack } from "native-base";

import color from "../utils/Strings/Colors";

import BackButton from "../utils/components/BackButton";
import CorrectButton from "../utils/components/CorrectButton";
import MyButton from "../utils/components/MyButton";

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const NotesScreen = ({navigation}) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <Box
      m="4"
      alignContent={"center"}
      w={"95%"}
      height={"95%"}
      flex={1}
      backgroundColor={color.BackgroundApp}
      //backgroundColor={'red.100'}
    >
      <Center width={"100%"}>
        <HStack width={"100%"}>
          <Center mx={"auto"}>
            <BackButton />
          </Center>
          <Text textAlign={"center"} mx={"auto"} fontSize={40}>
            {translationObject.addTest}
          </Text>
          <Center mx={"auto"} >
            <CorrectButton />
          </Center>
        </HStack>
      </Center>

      <Divider my="2" />

      <VStack width="100%" p={2} alignContent={"center"}>
        <Center>
          <FormControl isRequired width={"100%"}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              {translationObject.patiName}
            </FormControl.Label>
            <Input placeholder={translationObject.fullName} />
            <FormControl.HelperText
              _text={{
                fontSize: "xs",
              }}
            >
              {translationObject.errorMsg}
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              _text={{
                fontSize: "xs",
              }}
            >
              Error
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
      </VStack>

      <Divider my={3} width={"95%"} />

      <VStack width="100%" p={2} alignContent={"center"}>
        <Center>
          <FormControl isRequired width={"100%"}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              {translationObject.doneBy}
            </FormControl.Label>
            <Input placeholder={translationObject.docName} />
            <FormControl.HelperText
              _text={{
                fontSize: "xs",
              }}
            >
              {translationObject.errorMsg}
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              _text={{
                fontSize: "xs",
              }}
            >
              Error
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
      </VStack>

      <Divider my={3} width={"95%"} />

      <VStack width="100%" p={2} alignContent={"center"}>
        <Center>
          <FormControl isRequired width={"100%"}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              {translationObject.date}
            </FormControl.Label>
            <Input placeholder={translationObject.pickDatePH} type="" />
            <FormControl.HelperText
              _text={{
                fontSize: "xs",
              }}
            >
              {translationObject.errorMsg}
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              _text={{
                fontSize: "xs",
              }}
            >
              Error
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
      </VStack>
      <Center>
        <Box width={"100%"} my={3}>
          <MyButton icon={"add-circle-outline"} title={translationObject.setDocument} onPress={()=>navigation.navigate(translationObject.MenuScreen)} />
        </Box>
      </Center>
    </Box>
  );
};

export default NotesScreen;
