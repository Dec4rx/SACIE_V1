import React from "react";
import {
  Box,
  Center,
  Text,
  HStack,
  VStack,
  IconButton,
  Modal,
} from "native-base";

import { FlatList } from "react-native";
import { Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import ScreenNames from "../utils/ScreenNames";

import Icon_2 from "react-native-vector-icons/MaterialIcons";

import BackButton from "../utils/components/BackButton_Especial";
import MyButton from "../utils/components/MyButton";

import color from "../utils/Colors";

import MainContainer from "../utils/components/MainContainer";

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
                <b>Hecho por: </b> {doctorName}
              </Text>
              <Text>
                <b>Fecha: </b>
                {date}
              </Text>
            </Modal.Body>

            <Modal.Footer w={"100%"}>
              <Box mx={"auto"}>
                <MyButton
                  title={"Download File"}
                  icon={"download"}
                  flex="1"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Entendido
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
  return (
    <MainContainer>
      <Box mb={3}>
        <BackButton />
      </Box>
      <Box py={5} borderRadius={10} backgroundColor={color.MainBlue}>
        <Center>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Medical Test
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
            title={"Add Test"}
            onPress={() =>
              navigation.navigate(ScreenNames.RegisterMedicalTestNP)
            }
          />
        </Box>
      </Box>
    </MainContainer>
  );
};

export default MedicalTest;
