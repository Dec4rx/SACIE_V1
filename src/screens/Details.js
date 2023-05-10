import * as React from "react";
import { View, useWindowDimensions, Text, Image, Button } from "react-native";
import { Box, Center, HStack, VStack } from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import color from "../utils/Colors";
import BackButton from "../utils/components/BackButton";

import MedicalTest from "./MedicalTest";

var user = require("../resources/images/UserExample_1.png");

const Days = (props) => {
  return (
    <Box
      w={10}
      h={10}
      backgroundColor={"gray.200"}
      borderWidth={1}
      borderRadius={5}
    >
      <Center py={"2"}>
        <Text>{props.day}</Text>
      </Center>
    </Box>
  );
};

const Week = (props) => {
  return (
    <Center mt={3} w={'100%'}>
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
    <Center mt={5} borderWidth={1} w={"80%"} h={"full"}>
      <Text>Aqui va el QR jaja</Text>
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
    <Center p={3}>
      <Image source={require("../resources/images/UserExample_1.png")} />
      <Box borderWidth={1} borderRadius={10} height={"100"} width={"100"}></Box>
      <Text>Marco Antonio</Text>
    </Center>
  );
};

const MainRoute = () => (
  <View style={{ flex: 1, backgroundColor: color.BackgroundApp }}>
    <Box m={3}>
      <BackButton />
    </Box>
    <Box>
      <Center>
        <Profile />
      </Center>

      <Box mt={3} borderWidth={1} borderRadius={10} mx={10} p={2} shadow={"5"}>
        <Center>
          <Text>Information</Text>
          <HStack space={2}>
            <VStack justifyContent={"space-between"}>
              <DataResume data="XDD" type="Age" />
              <DataResume data=":D" type={"Health\nCondition"} />
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
        <VStack space={2}>
          <Button title={"Print QR"} />
          <Button title={"Print full patient information"} />
        </VStack>
      </Center>
    </Box>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <Text>Rip bozzo</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <Text>Rip bozzo</Text>
  </View>
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <Text>Rip bozzo</Text>
  </View>
);

const FithRoute = () => <MedicalTest />;

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Settings" component={SecondRoute} />
      <Tab.Screen name="Medicine" component={ThirdRoute} />
      <Tab.Screen name="Home" component={MainRoute} />
      <Tab.Screen name="XDD" component={FourthRoute} />
      <Tab.Screen name="champurrado" component={FithRoute} />
    </Tab.Navigator>
  );
};

export default MyTabs;
