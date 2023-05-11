import React from "react";

import { Box, Center, Text, HStack, VStack, Switch, Modal, IconButton, Button, Pressable } from "native-base";

import BackButton from "../utils/components/BackButton";
import color from "../utils/Colors";
import MyButton from "../utils/components/MyButton";

import Icon from "react-native-vector-icons/AntDesign";
import ScreenNames from "../utils/ScreenNames";

const Medicines = (props) => {
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
            <Modal.Header color={color.Black}>{props.MedicineName}</Modal.Header>
            <Modal.Body>
              <Text>
                <b>Dosage: </b>
                {props.dosage}
              </Text>
              <Text>
                <b>Time: </b>
                {props.time}
              </Text>
              <Text>
                <b>Intervals: </b>
                {props.intervals}
              </Text>
              <Text>
                <b>Via: </b>
                {props.via}
              </Text>
            </Modal.Body>

            <Modal.Footer w={"100%"}>

              <HStack space={'5'} mx={"auto"} >
                <IconButton
                  backgroundColor={"red.400"}
                  p={2}
                  borderRadius={"full"}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  icon={<Icon name="delete" size={20} />}
                />

                <IconButton
                  backgroundColor={"green.400"}
                  p={2}
                  borderRadius={"full"}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  icon={<Icon name="edit" size={20} />}
                />
              </HStack>
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
            <Text fontWeight={"bold"} color={color.MainBlue}>
              {props.MedicineName}
            </Text>
            <Text fontSize={"11"} color={"gray.500"}>
              {props.dosage}
            </Text>
          </VStack>
          <VStack marginLeft={"auto"} justifyContent={"center"}>
            <Center>
              <Switch />
              <IconButton
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                icon={<Icon name="ellipsis1" size={20} />}
              />
            </Center>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

const Medicine = ({navigation}) => {
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
        <Medicines
          dosage="30gr"
          MedicineName="Prueba 1"
          intervals="6 hrs"
          time="ahorita"
          via="oral"
        />
        <Medicines dosage="10gr" MedicineName="Prueba 2" />
      </Box>
      <Box px={3}>
        <MyButton icon={"add-circle-outline"} title={"Add Medicine"} onPress={()=>navigation.navigate(ScreenNames.RegisterMedicineNPScreen)} />
      </Box>
    </Box>
  );
};

export default Medicine;
