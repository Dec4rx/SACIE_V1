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

import { Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import ScreenNames from "../utils/ScreenNames";

import Icon_2 from "react-native-vector-icons/MaterialIcons";

import BackButton from "../utils/components/BackButton";
import MyButton from "../utils/components/MyButton";

import color from "../utils/Colors";

const Test = (props) => {
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
            <Modal.Header>{props.testName}</Modal.Header>
            <Modal.Body>
              <Text><b>Hecho por: </b> {props.doctorName}</Text> 
              <Text><b>Fecha: </b>{props.date}</Text>
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
              {props.testName}
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

const MedicalTest = ({navigation}) => {
  return (
    <Box>
      <Box m={3}>
        <BackButton />
      </Box>
      <Box py={5} mx={3} borderRadius={10} backgroundColor={color.MainBlue}>
        <Center>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Medical Test
          </Text>
        </Center>
      </Box>

      <Box p={2} backgroundColor={color.Gray} m={3} borderRadius={10}>
        <Test
          testName="Examen de globulos blancos"
          doctorName="Dra. Aguilera"
          date="10 de abril 2023"
        />
        <Test testName="Analisis de orina" doctorName='Dr. Rodriguez' date=' 11 de abril 2023' />
      </Box>
      <Box px={3}>
      </Box>
        <MyButton icon={"add-circle-outline"} title={"Add Test"} onPress={()=>navigation.navigate(ScreenNames.RegisterMedicalTestNP)}/>
    </Box>
  );
};

export default MedicalTest;
