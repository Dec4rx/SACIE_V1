import React from "react";

import { Box, Center, Text, HStack, VStack, Switch, Modal } from "native-base";
import BackButton from "../utils/components/BackButton";
import color from "../utils/Colors";
import MyButton from "../utils/components/MyButton";

import Icon from "react-native-vector-icons/AntDesign";

const Medicines = (props) => {
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
              Hecho por: {props.doctorName}
              Fecha: {props.date}
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
          <VStack justifyContent={"space-between"}>
            <Text fontWeight={"bold"} color={color.MainBlue} >
              {props.MedicineName}
            </Text>
            <Text fontSize={"11"} color={"gray.500"}>
              {props.dosis}
            </Text>
          </VStack>
          <VStack marginLeft={"auto"} justifyContent={"center"}>
            <Center>
              <Switch />
            </Center>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

const Medicine = () => {
  return (
    <Box>
      <Box m={3}>
        <BackButton />
      </Box>
      <Box py={5} mx={3} borderRadius={10} backgroundColor={color.MainBlue}>
        <Center>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Medicine
          </Text>
        </Center>
      </Box>
      <Box p={2} backgroundColor={color.Gray} m={3} borderRadius={10}>
        <Medicines dosis="30gr" MedicineName="Prueba 1" />
        <Medicines dosis="10gr" MedicineName="Prueba 2" />
      </Box>
      <Box px={3}>
        <MyButton icon={"add-circle-outline"} title={"Add Medicine"} />
      </Box>
    </Box>
  );
};

export default Medicine;
