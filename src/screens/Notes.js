import React, { useContext, useState, useEffect } from "react";
import { TextArea, Box, Text, Divider, IconButton, HStack } from "native-base";

import Icon from "react-native-vector-icons/AntDesign";

import BackButton from "../utils/components/BackButton_Especial";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage";
import { I18nContext } from "../utils/components/I18nProvider";

import { ref, update, onValue, get, child } from "firebase/database";

import { db } from "../Database";

const NotesScreen = () => {
  const [textArea, setAreaText] = useState();

  useEffect(() => {
    get(child(ref(db), "Pacient/" + "patient/" + "notes"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setNoteText(snapshot.val());
          console.log("Inicio: ", snapshot.val());
          setAreaText(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [""]);

  const [noteText, setNoteText] = useState("");

  const updateNotes = () => {
    update(ref(db, "Pacient/" + "patient/"), {
      notes: textArea,
    });
  };

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
        <Box
          justifyContent={"center"}
          backgroundColor={"#2BF0D7"}
          borderRadius={"full"}
        >
          <IconButton
            p={2}
            icon={<Icon name="save" size={40} />}
            onPress={() => updateNotes()}
          />
        </Box>
      </HStack>

      <Divider my="2" />

      <Box alignItems="center" flex={1}>
        <TextArea
          fontSize={20}
          defaultValue={textArea}
          h={"full"}
          onChangeText={(e) => setAreaText(e.valueOf())}
          borderRadius={20}
          placeholder={translationObject.notes}
          backgroundColor={"#E6EBEE"}
          w={"full"}
        />
      </Box>
    </Box>
  );
};

export default NotesScreen;
