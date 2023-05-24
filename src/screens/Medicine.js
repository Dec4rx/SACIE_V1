import React, { useContext } from "react";
import { Box, Center, Text, HStack, VStack, Switch, Modal, IconButton } from "native-base";

import BackButton from "../utils/components/BackButton_Especial";
import color from "../utils/Colors";
import MyButton from "../utils/components/MyButton";

import Icon from "react-native-vector-icons/AntDesign";
import ScreenNames from "../utils/ScreenNames";

import MainContainer from "../utils/components/MainContainer";
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const Medicines = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];
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
            <Modal.Header color={color.Black}>
              {props.MedicineName}
            </Modal.Header>
            <Modal.Body>
              <Text>
                <b>{translationObject.dosage}: </b>
                {props.dosage}
              </Text>
              <Text>
                <b>{translationObject.time}: </b>
                {props.time}
              </Text>
              <Text>
                <b>{translationObject.intervals}: </b>
                {props.intervals}
              </Text>
              <Text>
                <b>{translationObject.via}: </b>
                {props.via}
              </Text>
            </Modal.Body>

            <Modal.Footer w={"100%"}>
              <HStack space={"5"} mx={"auto"}>
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

const Medicine = ({ navigation }) => {
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
            {translationObject.med}
          </Text>
        </Center>
      </Box>
      <Box p={2} backgroundColor={color.Gray} my={3} borderRadius={10}>
        <Medicines
          dosage="30gr"
          MedicineName="Prueba 1"
          intervals="6 hrs"
          time="Ahorita"
          via="Oral"
        />
        <Medicines dosage="10gr" MedicineName="Prueba 2" />
        <Box w={'full'} my={3}>
          <MyButton
            icon={"add-circle-outline"}
            title={translationObject.addMed}
            onPress={() =>
              navigation.navigate(translationObject.RegisterMedicineNPScreen)
            }
          />
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Medicine;
