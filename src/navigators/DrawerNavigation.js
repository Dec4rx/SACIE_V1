import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { ImageBackground } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeBaseProvider, Button, Box, HamburgerIcon, Pressable, Heading, VStack,
  Text, Center, HStack, Divider, Icon, Image } from "native-base";
import ProfilePic from "../resources/img/nurseProfile.png"
global.__reanimatedWorkletInit = () => {};

const Drawer = createDrawerNavigator();
const drawerBackground = require('../resources/img/menu.png');

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
      case "Account":
        return "account";
      case "Notification":
        return "bell";
      case "Language":
        return "google-translate";
      case "Logout":
        return "logout";
      default:
        return undefined;
    }
  };
  
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props} safeArea style={styles.drawerContent} >
          
        <VStack space="6" my="2" mx="1" backgroundColor={"#ffffff"}>
        
          <Box px="5">
          <Image source={ProfilePic} alt="Profile img" size={"200px"} width={"100px"}
          height={"100px"} alignContent={"center"} resizeMode="contain" />  
            <Text bold color="#000000"> Jose Gordillo</Text>
          </Box>

          <VStack divider={<Divider />} space="4">
            <VStack space="3">
              {props.state.routeNames.map((name, index) => (
                <Pressable px="5" py="3" rounded="md" bg={ index === props.state.index ? "rgba(0, 0, 0, 0)" : "transparent" }
                  onPress={(event) => {
                    props.navigation.navigate(name); }}>
                  <HStack space="7" alignItems="center">
                    <Icon color={ index === props.state.index ? "primary.500" : "#2BF0D7" }
                      size="5" as={<MaterialCommunityIcons name={getIcon(name)} />} />
                    <Text fontWeight="500" color={
                        index === props.state.index ? "primary.500" : "gray.700" }>
                      {name} </Text>
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
          <ImageBackground source={drawerBackground} style={{ flex: 1 }}>
          {/* Your drawer content goes here */}
          </ImageBackground>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Outbox" component={Component} />
          <Drawer.Screen name="Favorites" component={Component} />
          <Drawer.Screen name="Archive" component={Component} />
          <Drawer.Screen name="Trash" component={Component} />
          <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
      </Box>
    );
  }
  
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default DrawerNavigation