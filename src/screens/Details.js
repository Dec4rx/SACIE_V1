import * as React from "react";
import { View, useWindowDimensions, Text, Image } from "react-native";
import { Box, Center } from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";

import color from "../utils/Colors";
import BackButton from "../utils/components/BackButton";

var user = require("../resources/images/UserExample_1.png");

const DataResume = () =>{
  return(
    <Box>
      <Text style={{fontWeight: 'bold'}}>Hola Mau </Text>
      <Text style={{color: 'gray'}}>Pendejo </Text>
    </Box>
  );
}

const MainRoute = () => (
  <View style={{ flex: 1, backgroundColor: color.BackgroundApp }}>
    <Box>
      <BackButton />
    </Box>
    <Box>
      <Center backgroundColor={"amber.200"}>
        <Image
          source={require("../resources/images/UserExample_1.png")}
        />
        <Text>Marco Antonio</Text>
      </Center>
      <Box>
        <Text>Information</Text>
        <Center>
      <DataResume/>
        </Center>
      </Box>
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
