import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Switch, Modal, Alert } from "react-native";
import FormInput from "./FormInput";
import BlueButton from "./BlueButton";
import BackButton from "./BackButton";
import { AntDesign, Feather } from "@expo/vector-icons";

import { HStack, VStack } from "native-base";

import MainContainer from "./MainContainer";

import { translations } from "../Strings/Lenguage"
import { I18nContext } from '../components/I18nProvider';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import { Dimensions } from 'react-native';

import { getDatabase, ref, set, push, onValue} from "firebase/database";
import { db } from "../../Database";


const Signs = ({ title, dbSing, strokeColor, gradientColor }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [modalVisible, setModalVisible] = useState(false);

  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];




  const [time, setTime] = useState(0)
  const [value, setValue] = useState(0)

  const [realSings, setRealSigns] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let lastValue = 0
  let firstValue = 0
  let lastTime = 0
  let firstTime = 0
  useEffect(() => {
    const getSigns = ref(db, 'Pacient/patient/vitalSigns/0/' + dbSing);
    onValue(getSigns, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
  
      let values = [];
      for (let key in data) {
        let value = data[key];
        values.push(value);
      }
      console.log(values);
      setRealSigns(values);
      
      setIsLoading(false); // Marcar que los datos se han cargado correctamente
    });
  }, []);

  useEffect(() => {
    console.log("real", realSings);
    
  }, [realSings]);

  if (isLoading) {
    // Muestra un indicador de carga mientras los datos se están obteniendo
    return <div>Cargado...</div>;
  }
  else{
      lastValue = realSings[realSings.length - 1].y;
      firstValue =  realSings[0].y;
      lastTime = realSings[realSings.length - 1].x;
      firstTime =  realSings[0].x;
  }

 





  const postSign = () => {
    const db = getDatabase();
    const postListRef = ref(db, 'Pacient/patient/vitalSigns/0/' + dbSing)
    const newPostRef = push(postListRef);
    set(newPostRef, {
      "x": parseInt(time),
      "y": parseInt(value)
    }).then(
      console.log('si')
    )
  }






  return (

    <MainContainer>
      <ScrollView>
        <HStack>
          <BackButton />
          <Text style={styles.mainTitle}>{title}</Text>
        </HStack>

        <View
          style={{
            borderBottomColor: "#F5F5F5",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 5,
          }}
        />
        <Text style={styles.secondaryTitle}>{title}</Text>
        <Text style={styles.dataTitle}>{lastValue}</Text>
        {realSings !== undefined ? (
          <View style={styles.centeredView}>
            <Chart
              style={{ height: 400, width: '100%' }}
              data={realSings}
              padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
              xDomain={{ min: firstTime, max: lastTime }}
              yDomain={{ min: firstValue, max: lastValue }}
            >
              <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
              <HorizontalAxis tickCount={5} />
              <Area theme={{ gradient: { from: { color: gradientColor }, to: { color: gradientColor, opacity: 0.4 } } }} />
              <Line theme={{ stroke: { color: strokeColor, width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 } } }} />
            </Chart>
          </View>
        ) : null}



        {/*Para meter los datos */}
        <View style={styles.setvalues}>
          <FormInput
            label={translationObject.time}
            value={time} onChangeText={(time) => { setTime(time) }}
          />
          <FormInput label={translationObject.value}
            value={value} onChangeText={(value) => { setValue(value) }} />
          {/* <BlueButton title={translationObject.add} onPress={() => setModalVisible(true)} /> */}
          <BlueButton title={translationObject.add} onPress={postSign} />
        </View>

        <VStack mt={3} style={styles.inputContainer}>
          <HStack justifyContent={'center'}>
            <Text style={styles.text}>{translationObject.setAlarmInt}</Text>
            <Switch
              style={{ marginStart: 'auto' }}
              trackColor={{ false: "#B8CAE4", true: "#60E532" }}
              thumbColor={isEnabled ? "#B8CAE4" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </HStack>
          <TextInput style={styles.input} />
          <View style={styles.line} />
        </VStack>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.closeModal}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>

              <Text style={styles.modalTitle}>
                {translationObject.rUSureData}
              </Text>

              {/* <TextInput style={styles.modalText}
                value={time} onChangeText={(time) => { setTime(time) }}>
                {" "}
                <b>{translationObject.time}:</b> <Text>7:00 a.m.</Text>
              </TextInput>

              <TextInput style={styles.modalText}
                value={value} onChangeText={(value) => { setValue(value) }}>
                {" "}
                <b>{translationObject.value}:</b> <Text>1</Text>
              </TextInput> */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <TouchableOpacity
                  style={styles.okModal}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Feather name="check" size={24} color="black" />
                </TouchableOpacity> */}

                <TouchableOpacity
                  style={styles.noModal}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    textAlign: "center",
    fontSize: 36,
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 50,
  },
  container: {
    flex: 1,
  },
  secondaryTitle: {
    marginTop: 15,
    marginStart: 0,
    fontSize: 20,
    color: "#8E8E93",
  },
  dataTitle: {
    marginStart: 0,
    fontSize: 40,
  },
  image: {
    //ok
    width: 315,
    height: 250,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 10,
    padding: 0,
  },
  input: {
    marginTop: 8,
    backgroundColor: "#F4F4F5",
    borderWidth: 1.2,
    borderColor: "#EDECF4",
    borderRadius: 22,
    padding: 10,
    fontSize: 20,
    color: "#000",
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "normal",

  },
  redText: {
    color: "#D22525",
  },
  line: {
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 2,
    textAlign: "center",
    color: "#67A4F7",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 2,
    textAlign: "center",
    color: "#62635C",
  },
  closeModal: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  okModal: {
    borderRadius: 100,
    backgroundColor: "#2BF0D7",
    padding: 4,
    margin: 4,
  },
  noModal: {
    borderRadius: 100,
    backgroundColor: "#FA0000",
    padding: 4,
    margin: 4,
  },
  setvalues: {
    padding: 0,
  },
});

export default Signs;