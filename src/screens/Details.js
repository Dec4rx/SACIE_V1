import * as React from "react";
import {
  View,
  useWindowDimensions,
  Text,
  Button,
  ScrollView,
} from "react-native";
import { Box, Center, HStack, VStack, Image } from "native-base";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import color from "../utils/Colors";
import BackButton from "../utils/components/BackButton_Especial";
import ImageButton from "../utils/components/ImageButton";

import MedicalTest from "./MedicalTest";
import Medicine from "./Medicine";
import Notes from "./Notes";
import VitalSigns from "./VitalSigns";

import MainContainer from "../utils/components/MainContainer";
var user = require("../resources/images/UserExample_1.png");

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
  return (
    <Center mt={5} w={"100%"}>
      <HStack space={3}>
        <Days day="Mo" />
        <Days day="Tu" />
        <Days day="We" />
        <Days day="Th" />
        <Days day="Fr" />
        <Days day="Sa" />
        <Days day="Su" />
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

const DataResume = (props) => {
  return (
    <Box mt={2}>
      <Text style={{ fontWeight: "bold" }}>{props.data} </Text>
      <Text style={{ color: "gray" }}>{props.type} </Text>
    </Box>
  );
};

const Profile = () => {
  return (
    <Center>
      <Box backgroundColor={"white"} shadow={"5"} borderRadius={20}>
        <Image
          source={require("../resources/pictures/UserExample.png")}
          style={{ width: 100, height: 100, margin: 10 }}
        />
      </Box>
      <Text style={{marginVertical: 10}}>Marco Antonio</Text>
    </Center>
  );
};

const MainRoute = () => (
  <ScrollView>
    <Center backgroundColor={"white"} style={{ padding: "5%" }}>
      <Box w={"full"} mb={3}>
        <BackButton />
      </Box>
      <Box>
        <Center>
          <Profile />
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
            <Text>Information</Text>
            <HStack space={2}>
              <VStack justifyContent={"space-between"}>
                <DataResume data="21" type="Age" />
                <DataResume data="4" type={"Health\nCondition"} />
              </VStack>

              <VStack justifyContent={"space-between"}>
                <DataResume data="38°" type="Temperature" />
                <DataResume data="140" type="Glucose" />
              </VStack>

              <VStack justifyContent={"space-between"}>
                <DataResume data="120/80" type="Pressure" />
                <DataResume data="3" type="Bed" />
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
              title={"Print QR"}
            />
            <ImageButton
              image={require("../resources/pictures/Impression.png")}
              title={"Print full patient\ninformation"}
            />
          </VStack>
        </Center>
      </Box>
    </Center>
  </ScrollView>
);

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName="Medicine"
      activeColor="#67A4F7"
      style={{ padding: 0 }}
    >
      <Tab.Screen
        name="MedicalTest"
        component={MedicalTest}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="test-tube" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="VitalSigns"
        component={VitalSigns}
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
        component={MainRoute}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={Medicine}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pill" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
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
