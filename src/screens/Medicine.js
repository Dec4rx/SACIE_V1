import React, { useContext, useState, useEffect } from "react";
import { Box, Center, Text, HStack, VStack, Switch, Modal, IconButton } from "native-base";

import BackButton from "../utils/components/BackButton_Especial";
import color from "../utils/Strings/Colors";
import MyButton from "../utils/components/MyButton";

import Icon from "react-native-vector-icons/AntDesign";
import MainContainer from "../utils/components/MainContainer";

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

//import { firebase } from '@firebase'

import {
  ref,
  onValue,
  remove,
  update,
} from "firebase/database";

import { db } from "../Database";

import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    MedicineName: "Clombuterol",
    dosage: "30mg",
    intervals: "6hrs",
    time: "7:00 am",
    via: "oral",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    MedicineName: "Paracetamol",
    dosage: "20mg",
    intervals: "si",
    time: "7:00 am",
    via: "oral",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    MedicineName: "Metamizol",
    dosage: "1mg",
    intervals: "12hrs",
    time: "7:00 am",
    via: "intravenosa",
  },
];

const Medicines = ({ MedicineName, dosage, dosage_unit, intervals, time, via, ruta, id }) => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const [fecha, setFecha] = useState("");

  const handleDelete = () => {
    const rutaRemove = ref(db, ruta + '/medicine/' + id);
    console.log('ruta para borrar: ', rutaRemove);
    remove(rutaRemove);
    setModalVisible(!modalVisible);
  }

  const handleHour = () => {
    const fechaHoraActual = new Date();

    const dia = fechaHoraActual.getDate();
    const mes = fechaHoraActual.getMonth() + 1;
    const anio = fechaHoraActual.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    const hora = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();
    const horaFormateada = `${hora}:${minutos}`;

    const fechaYHora = `${fechaFormateada} ${horaFormateada}`;

    console.log('Fecha y Hora actual:', fechaYHora);

    setFecha(fechaYHora);

    const rutaUpdate = ref(db, ruta + '/medicine/' + id);
    update(rutaUpdate, {
      time: fechaYHora
    })

  }

  const navigation = useNavigation();
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
            <Modal.Header color={color.Black}>{MedicineName}</Modal.Header>
            <Modal.Body>
              <Text>
                <b>{translationObject.dosage}: </b>
                {dosage + dosage_unit}
              </Text>
              <Text>
                <b>Last dosage: {time} </b>
              </Text>
              <Text>
                <b>{translationObject.intervals}: </b>
                {intervals}
              </Text>
              <Text>
                <b>{translationObject.via}: </b>
                {via}
              </Text>
            </Modal.Body>

            <Modal.Footer w={"100%"}>
              <HStack space={"5"} mx={"auto"}>
                <IconButton
                  backgroundColor={"red.400"}
                  p={2}
                  borderRadius={"full"}
                  onPress={() => {
                    handleDelete()
                  }}
                  icon={<Icon name="delete" size={20} />}
                />

                <IconButton
                  backgroundColor={"red.400"}
                  p={2}
                  borderRadius={"full"}
                  onPress={() => {
                    handleHour()
                  }}
                  icon={<Icon name="plus" size={20} />}
                />

                <IconButton
                  backgroundColor={"green.400"}
                  p={2}
                  borderRadius={"full"}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate('ModifyMedicine', { MedicineName: { MedicineName }, dosage: { dosage }, dosage_unit: { dosage_unit }, intervals: { intervals }, time: { time }, via: { via }, ruta: { ruta }, id: { id } });
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
        w={"full"}
      >
        <HStack>
          <VStack justifyContent={"space-between"}>
            <Text fontWeight={"bold"} color={color.MainBlue}>
              {MedicineName}
            </Text>
            <Text fontSize={"11"} color={"gray.500"}>
              Last dosage: {time}</Text>
            <Text fontSize={"11"} color={"gray.500"}>
              {dosage + dosage_unit}
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

const Medicine = ({ ruta }) => {

  navigation = useNavigation();

  const [medicines, setMedicines] = useState([]);
  navigation = useNavigation();
  console.log('Ruta en medicina: ', ruta);

  useEffect(() => {
    const starCountRef = ref(db, ruta + '/medicine'); //Ruta que uses
    onValue(starCountRef, (snapshot) => {
      var update = []; //Arreglo para la flatlist
      snapshot.forEach((child) => { //child es el nodo donde te encuentras
        update.push({
          key: child.key, //usa key para acceder al nombre donde estas 
          medicine: child.val(),

        })

      })
      setMedicines(update); //setea medicamentos con el array
      const data = snapshot.val();
      const auxiliar = data;

    });
  }, [""]);

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
        <FlatList
          data={medicines} //array de arriba
          renderItem={({ item }) => (
            <Medicines
              MedicineName={item.medicine.name} //aqui todo funciona como un flatlist cualquiera
              dosage={item.medicine.dosage}
              dosage_unit={item.medicine.dosage_unit}
              via={item.medicine.route}
              intervals={item.medicine.intervals}
              time={item.medicine.time}
              ruta={ruta}
              id={item.key}
            />

          )}
          keyExtractor={(item) => item.id}
        />

        <Box w={"full"} my={3}>
          <MyButton
            icon={"add-circle-outline"}
            title={translationObject.addMed}
            onPress={() =>
              navigation.navigate(translationObject.RegisterMedicineNPScreen, { ruta: { ruta } })
            }
          />
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Medicine;