import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  Image,
} from "native-base";
import Principal from "../screens/Principal";
import Account from "../screens/Account";
import Notification from "../screens/Notification";
import Lenguage from "../screens/Lenguage";
import TermsAndConditions from "../screens/TermnsAndConditionsCheckbox";
import Exit from "../screens/Exit";

global.__reanimatedWorkletInit = () => {};

const Drawer = createDrawerNavigator();

function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "Perfil":
      return "account";
    case "Notificaciones":
      return "bell";
    case "Idioma":
      return "google-translate";
    case "Salir":
      return "logout";
    case "Inicio":
      return "home";
    case "Terminos y condiciones":
      return "text-box";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1" backgroundColor={"#ffffff"}>
        <Box px="5">
          <Image
            source={require("../resources/pictures/nurseProfile.png")}
            alt="Profile img"
            size={"200px"}
            width={"100px"}
            height={"100px"}
            alignContent={"center"}
            resizeMode="contain"
          />
          <Text bold color="#000000">
            {" "}
            Jose Gordillo
          </Text>
        </Box>

        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(0, 0, 0, 0)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "#2BF0D7"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}{" "}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Inicio" component={Principal} />
        <Drawer.Screen name="Perfil" component={Account} />
        <Drawer.Screen name="Notificaciones" component={Notification} />
        <Drawer.Screen name="Idioma" component={Lenguage} />
        <Drawer.Screen name="Salir" component={Exit} />
        <Drawer.Screen
          name="Terminos y condiciones"
          component={TermsAndConditions}
        />
      </Drawer.Navigator>
    </Box>
  );
}

export default function DrawerNavigation() {
  return <MyDrawer />;
}
