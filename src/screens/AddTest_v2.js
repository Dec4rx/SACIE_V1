import React from "react";
import {
  TextArea,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Divider,
  View,
  Flex,
  HStack,
  FormControl,
  Input,
  VStack,
} from "native-base";

import Icon from "react-native-vector-icons/AntDesign";

import { StretchInX } from "react-native-reanimated";

import color from "../utils/Colors";

import BackButton from "../utils/components/BackButton";
import CorrectButton from "../utils/components/CorrectButton";
import MyButton from "../utils/components/MyButton";

import ScreenNames from "../utils/ScreenNames";

const NotesScreen = ({navigation}) => {
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
            Add Test
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
              Done by
            </FormControl.Label>
            <Input placeholder="Doctor Name" />
            <FormControl.HelperText
              _text={{
                fontSize: "xs",
              }}
            >
              Name should contain atleast 3 character.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              _text={{
                fontSize: "xs",
              }}
            >
              Error Name
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
              Date
            </FormControl.Label>
            <Input placeholder="Pick a Date " type="" />
            <FormControl.HelperText
              _text={{
                fontSize: "xs",
              }}
            >
              Name should contain atleast 3 character.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              _text={{
                fontSize: "xs",
              }}
            >
              Error Name
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
      </VStack>
      <Center>
        <Box width={"100%"} my={3}>
          <MyButton icon={"add-circle-outline"} title={"Set Document"} onPress={()=>navigation.navigate(ScreenNames.DetailsScreen)}/>
        </Box>
      </Center>
    </Box>
  );
};

export default NotesScreen;
