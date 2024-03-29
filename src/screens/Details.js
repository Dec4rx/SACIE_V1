import React, { useContext, useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import { Box, Center, HStack, VStack, Image } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import BackButton from "../utils/components/BackButton_Especial";
import ImageButton from "../utils/components/ImageButton";

import MedicalTest from "./MedicalTest";
import Medicine from "./Medicine";
import Notes from "./Notes";
import VitalSigns from "./VitalSigns";

import { translations } from "../utils/Strings/Lenguage";
import { I18nContext } from "../utils/components/I18nProvider";

import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  onValue,
} from "firebase/database";

import { db } from "../Database";



const Days = (props) => {
  return (
    <Center
      w={10}
      h={10}
      backgroundColor={"gray.200"}
      borderWidth={1}
      borderRadius={5}
    >
      <Center py={"2"}>
        <Text>{props.day}</Text>
      </Center>
    </Center>
  );
};

const Week = (props) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <Center mt={5} w={"100%"}>
      <HStack space={3}>
        <Days day={translationObject.mo} />
        <Days day={translationObject.tu} />
        <Days day={translationObject.we} />
        <Days day={translationObject.th} />
        <Days day={translationObject.fr} />
        <Days day={translationObject.sa} />
        <Days day={translationObject.su} />
      </HStack>
    </Center>
  );
};

const QR = () => {
  return (
    <Center mt={5} w={"80%"} h={"full"}>
      <Image
        source={require("../resources/pictures/QR.png")}
        style={{ width: 200, height: 200 }}
      />
    </Center>
  );
};

const DataResume = ({ data, type }) => {
  return (
    <Box mt={2}>
      <Text style={{ fontWeight: "bold" }}>{data} </Text>
      <Text style={{ color: "gray" }}>{type} </Text>
    </Box>
  );
};

const Profile = ({ name, img }) => {
  return (
    <Center>
      <Box backgroundColor={"white"} shadow={"5"} borderRadius={20}>
        <Image
          source={require("../resources/pictures/UserExample.png")}
          style={{ width: 100, height: 100, margin: 10 }}
        />
      </Box>
      <Text style={{ marginVertical: 10 }}>{name}</Text>
    </Center>
  );
};

const MainRoute = (props) => {
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    bed: "",
    blood: "",
    condition: "",
    temperature: "",
    Pressure: "",
    glucose: "",
  });

  useEffect(() => {

    const starCountRef = ref(db, props.ruta);

    onValue(starCountRef, (snapshot) => {

      const data = snapshot.val();

      setPatientData({ name: data.name, age: data.age, bed: data.bed, condition: data.condition, blood: data.blood });


    });
  }, [""]);

  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <ScrollView>
      <Center backgroundColor={"white"} style={{ padding: "5%" }}>
        <Box w={"full"} mb={3}>
          <BackButton />
        </Box>
        <Box>
          <Center>
            <Profile name={patientData.name} />
          </Center>

          <Box
            backgroundColor={"white"}
            mt={3}
            borderRadius={10}
            mx={10}
            p={2}
            shadow={"5"}
          >
            <Center>
              <HStack space={2}>
                <VStack justifyContent={"space-between"}>
                  <DataResume data={patientData.age} type={translationObject.age} />
                  <DataResume
                    data={patientData.blood}
                    type={translationObject.bloodTypeSpace}
                  />
                </VStack>

                <VStack justifyContent={"space-between"}>
                  <DataResume data="38°" type={translationObject.temperature} />
                  <DataResume data="140" type={translationObject.glucose} />
                </VStack>

                <VStack justifyContent={"space-between"}>
                  <DataResume data="120/80" type={translationObject.pressure} />
                  <DataResume data={patientData.bed} type={translationObject.bed} />
                </VStack>
              </HStack>
            </Center>
          </Box>
          <Center w={"100%"}>
            <Week />
          </Center>
          <Center>
            <QR />
          </Center>
          <Center mt={5} justifyContent={"space-around"}>
            <VStack w={"60%"} space={2}>
              <ImageButton
                image={require("../resources/pictures/Qr_icon.png")}
                title={translationObject.printQr}
              />
              <ImageButton
                image={require("../resources/pictures/Impression.png")}
                title={translationObject.printFull}
              />
            </VStack>
          </Center>
        </Box>
      </Center>
    </ScrollView>
  );
};

const Tab = createMaterialBottomTabNavigator();

const VS = (props) =>{
  console.log('Ruta recibida: ', props.ruta)
  return(
    <VitalSigns ruta={props.ruta}/>
  );
}


const MyTabs = ({ route }) => {
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];
  const { itemId, ruta } = route.params;

  const nurse = ruta;
  const patient = itemId;

  console.log('Enfermera: ', nurse);
  console.log('Paciente: ', patient);
  const rutaCompleta = "Nurses/" + nurse.user + "/Paciente/" + patient.id;
  console.log('Ruta asignada: ', rutaCompleta)
  //const starCountRef = ref(db, "Nurses/" + nurse+ "/Paciente/" + patient);
  return (

    <Tab.Navigator
      labeled={false}
      initialRouteName="Home"
      activeColor="#67A4F7"
      style={{ padding: 0 }}
    >
      <Tab.Screen
        name={translationObject.RegisterMedicalTest}
        children={()=><MedicalTest ruta={rutaCompleta}/>}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="test-tube" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={translationObject.VitalSignsScreen}
        children={()=> <VS ruta={rutaCompleta}/>}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="heart-pulse"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        children={() => <MainRoute ruta={rutaCompleta}/>}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={translationObject.MedicineScreen}
        children={()=><Medicine ruta={rutaCompleta}/>}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pill" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={translationObject.NotesScreen}
        children={()=> <Notes ruta={rutaCompleta}/>}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="text" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
