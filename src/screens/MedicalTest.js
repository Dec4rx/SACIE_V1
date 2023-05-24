import React, { useContext } from "react";
import { Box, Center, Text, HStack, IconButton, Modal} from "native-base";

import { FlatList } from "react-native";
import ScreenNames from "../utils/ScreenNames";
import Icon_2 from "react-native-vector-icons/MaterialIcons";
import BackButton from "../utils/components/BackButton_Especial";
import MyButton from "../utils/components/MyButton";

import color from "../utils/Colors";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    testName: "Analisis de globulos rojos",
    doctorName: "Dra. Guadalupe",
    date: "hoy",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    testName: "Conteo de plaquetas",
    doctorName: "Dr. House",
    date: "hoy",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    testName: "Colonoscopia",
    doctorName: "Dr. Foreman",
    date: "hoy",
  },
];

const Item = ({ title }) => (
  <Box>
    <Text>{title}</Text>
  </Box>
);

const Test = ({ testName, doctorName, date }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <Center>
        <Modal
          marginY={"auto"}
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          avoidKeyboard
          justifyContent="center"
          size="lg"
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header fontWeight={"bold"}>{testName}</Modal.Header>
            <Modal.Body>
              <Text>
                <b>{translationObject.doneBy}: </b> {doctorName}
              </Text>
              <Text>
                <b>{translationObject.date}: </b>
                {date}
              </Text>
            </Modal.Body>

            <Modal.Footer w={"100%"}>
              <Box mx={"auto"}>
                <MyButton
                  title={translationObject.downloadFull}
                  icon={"download"}
                  flex="1"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                </MyButton>
              </Box>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>

      <Box
        backgroundColor={color.White}
        borderRadius={10}
        p={3}
        shadow={"5"}
        mt={2}
      >
        <HStack>
          <Box justifyContent={"center"}>
            <Text fontWeight={"bold"} color={color.MainBlue}>
              {testName}
            </Text>
          </Box>
          <Box marginLeft={"auto"}>
            <IconButton
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              p="1"
              icon={<Icon_2 name="arrow-drop-down" size={20} />}
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

const MedicalTest = ({ navigation }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <MainContainer>
      <Box mb={3}>
        <BackButton />
      </Box>
      <Box py={5} borderRadius={10} backgroundColor={color.MainBlue}>
        <Center>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {translationObject.medicalTest}
          </Text>
        </Center>
      </Box>

      <Box p={2} backgroundColor={color.Gray} my={3} borderRadius={10}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Test
              testName={item.testName}
              doctorName={item.doctorName}
              date={item.date}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Box w={"full"} mt={3}>
          <MyButton
            icon={"add-circle-outline"}
            title={translationObject.addTest}
            onPress={() =>
              navigation.navigate(translationObject.RegisterMedicalTestNP)
            }
          />
        </Box>
      </Box>
    </MainContainer>
  );
};

export default MedicalTest;