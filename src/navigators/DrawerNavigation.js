import React, { useContext, useState, useEffect } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Pressable,
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

import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
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

import { translations } from "../utils/Strings/Lenguage";
import { I18nContext } from "../utils/components/I18nProvider";

global.__reanimatedWorkletInit = () => {};

const Drawer = createDrawerNavigator();

const getIcon = (screenName) => {
  switch (screenName) {
    case "Perfil":
      return "account";
    case "Account":
      return "account";
    case "Notificaciones":
      return "bell";
    case "Notificactions":
      return "bell";
    case "Idioma":
      return "google-translate";
    case "Language":
      return "google-translate";
    case "Salir":
      return "logout";
    case "Exit":
      return "logout";
    case "Inicio":
      return "home";
    case "Principal":
      return "home";
    case "Terminos y Condiciones":
      return "text-box";
    case "Terms & Conditions":
      return "text-box";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const [nameNurse, setName] = useState();

  useEffect(() => {
    const starCountRef = ref(db, "Nurses/" + "907dJoflccWzOxENhx0rOyZxc2H3");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const nombre = data.name;
      setName(nombre);
      //updatestartCount(postElement, data);
      console.log("Referencia: ", nameNurse);
      console.log("Esta es la variable: ", nombre);
    });
  }, [""]);

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
            {nameNurse}
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
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name={translationObject.PrincipalScreen}
          component={Principal}
        />
        <Drawer.Screen
          name={translationObject.AccountScreen}
          component={Account}
        />
        <Drawer.Screen
          name={translationObject.NotificationScreen}
          component={Notification}
        />
        <Drawer.Screen
          name={translationObject.LanguageScreen}
          component={Lenguage}
        />
        <Drawer.Screen name={translationObject.ExitScreen} component={Exit} />
        <Drawer.Screen
          name={translationObject.TermnsAndConditionsCheckBoxScreen}
          component={TermsAndConditions}
        />
      </Drawer.Navigator>
    </Box>
  );
}

export default function DrawerNavigation() {
  return <MyDrawer />;
}
