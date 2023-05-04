import * as React from "react";
import { View, useWindowDimensions, Text, Image, Button } from "react-native";
import { Box, Center, HStack, VStack } from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";

import color from "../utils/Colors";
import BackButton from "../utils/components/BackButton";

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
    <Center mt={3}>
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

const MainRoute = () => (
  <View style={{ flex: 1, backgroundColor: color.BackgroundApp }}>
    <Box>
      <BackButton />
    </Box>
    <Box>
      <Center backgroundColor={"amber.200"}>
        <Image source={require("../resources/images/UserExample_1.png")} />
        <Box borderWidth={1} borderRadius={10} height={"50"} width={"50"}></Box>
        <Text>Marco Antonio</Text>
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
      <Week />
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

const renderScene = SceneMap({
  first: MainRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
