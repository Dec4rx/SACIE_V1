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

import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { db } from "../../Database";

import BackgroundTimer from "react-native-background-timer";//Timer

const Signs = ({ title, dbSing, strokeColor, gradientColor, ruta }) => {

  console.log('Donde estamos actualmente? ', dbSing)
  console.log('Dentro de la matriz, llego esta ruta:', ruta)

  const [modalVisible, setModalVisible] = useState(false);

  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];




  // const [time, setTime] = useState(0.0)
  const [value, setValue] = useState(0.0)

  const [realSings, setRealSigns] = useState([])
  const [tickValuesX, setTickValuesX] = useState([])
  const [tickValuesY, setTickValuesY] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [secondsLeft, setSecondsLeft] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (isEnabled) {
      postSeconds();
      startTimer();
    }
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }

  useEffect(() => {
    const getSigns = ref(db, ruta + dbSing);
    onValue(getSigns, (snapshot) => {
      const data = snapshot.val();


      let values = [];
      for (let key in data) {
        console.log("key->", key);
        let value = data[key];
        if (key !== "intervals") {
          values.push(value);
        }
      }

      const y = [...new Set(values.map(val => val.y))]
      console.log(y)
      setTickValuesY(y)

      const x = [...new Set(values.map(val => val.x))]
      console.log(x)
      setTickValuesX(x)

      setRealSigns(values);

      setIsLoading(false); // Marcar que los datos se han cargado correctamente
      console.log(values)
    });
  }, []);

  useEffect(() => {


  }, [realSings]);

  if (isLoading) {
    // Muestra un indicador de carga mientras los datos se están obteniendo
    return <div>Cargado...</div>;
  }

  const postSign = () => {
    const db = getDatabase();
    const postListRef = ref(db, ruta + dbSing)
    const newPostRef = push(postListRef);

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const timeString = hours + "." + minutes;
    console.log(timeString)
    const timeFloat = parseFloat(timeString)
    console.log(timeFloat)

    // setTime(timeFloat)
    set(newPostRef, {
      "x": timeFloat,
      "y": parseFloat(value)
    }).then(

    )
  }
  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60)
    let mins = Math.floor((secondsLeft / 60) % 60)
    let seconds = Math.floor(secondsLeft % 60)
    let displayHours = hours < 10 ? `0${hours}` : hours
    let displayMins = mins < 10 ? `0${mins}` : mins
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds
    return {
      displayHours,
      displayMins,
      displaySecs,
    }
  }

  const postSeconds = () => {
    const sec = hours * 3600 + mins * 60
    setSecondsLeft(sec)
  }

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) return secs - 1
        else return 0
      })
    }, 1000)
  }

  // useEffect(() => {

  // }, [isEnabled]);

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
        <Text style={styles.dataTitle}>{realSings[realSings.length - 1].y}</Text>
        {realSings !== undefined ? (

          <View style={styles.centeredView}>

            <Chart
              style={{ height: 400, width: '100%' }}
              data={realSings}
              padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
              xDomain={{ min: tickValuesX ? Math.min(...tickValuesX) : 0, max: tickValuesX ? Math.max(...tickValuesX) : 0 }}
              yDomain={{ min: tickValuesY ? Math.min(...tickValuesY) : 0, max: tickValuesY ? Math.max(...tickValuesY) : 0 }}
            >
              <VerticalAxis tickCount={realSings.length} tickValues={tickValuesY} theme={{ labels: { formatter: (v) => v.toFixed(2), label: { fontSize: 12, fontWeight: "bold" } } }} />
              <HorizontalAxis tickCount={realSings.length} tickValues={tickValuesX} theme={{ labels: { formatter: (v) => v.toFixed(2), label: { fontSize: 12, fontWeight: "bold" } } }} />
              <Area theme={{ gradient: { from: { color: gradientColor }, to: { color: gradientColor, opacity: 0.4 } } }} />
              <Line theme={{ stroke: { color: strokeColor, width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 } } }} />
            </Chart>
          </View>
        ) : null}



        {/*Para meter los datos */}
        <View style={styles.setvalues}>
          {/* <FormInput
            label={translationObject.time}
            value={time} onChangeText={(time) => { setTime(time) }}
          /> */}
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
          <HStack justifyContent="center">
            {isEnabled ? <Text style={styles.secondaryTitle}>
              {clockify().displayHours} Hours {clockify().displayMins} Mins{" "}
              {clockify().displaySecs } Secs
            </Text>
              : null
            }
          </HStack>

          <HStack justifyContent="center">


            <TextInput style={[styles.input, { width: 100, textAlign: 'center' }]}
              placeholder="Horas"
              keyboardType="numeric"
              value={hours} onChangeText={(hours) => { setHours(hours) }} />

            <TextInput style={[styles.input, { width: 100, textAlign: 'center', marginLeft: 8 }]}
              placeholder="Minutos"
              keyboardType="numeric"
              value={mins} onChangeText={(mins) => { setMins(mins) }}
            />

          </HStack>

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
    fontSize: 18,
    color: "#000",
  },
  input2: {
    backgroundColor: "#F4F4F5",
    borderWidth: 1.2,
    borderColor: "Blue",
    padding: 10,
    fontSize: 20,
    color: "#000",
  },
  cont: {
    marginTop: 8,
    backgroundColor: "#F4F4F5",
    borderWidth: 1.2,
    borderColor: "#EDECF4",
    borderRadius: 22,
    padding: 10,
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