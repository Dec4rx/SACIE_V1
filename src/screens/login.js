import {  Box, Center,Heading,FormControl,Input,Button,Link,Text,HStack,VStack } from "native-base";
import React from "react";
import { Image, NativeBaseProvider } from "native-base";
import Enf_1 from "../MarcoImages/Enf_1.png";
import BlueButton from '../utils/components/BlueButton';
import BackButton from '../utils/components/BackButton';
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";

import ScreenNames from "../utils/ScreenNames";

const login = ({navigation}) => { 
    return <Center w="100%">
       <Box safeArea p="2" py="8" w="90%" maxW="300" alignContent={"center"}>
      <Box safeArea p="2" py="8" w="90%" maxW="300" alignContent={"center"}>
    <Heading style={{fontSize: 32,}} textAlign={"center"} fontWeight="semibold">
            Login
          </Heading>
          </Box>
    <Image  style={{
      width: 175,
    height: 250,}}
    source={Enf_1} size="xl" />        
    <Box safeArea p="2" py="8" w="90%" maxW="300">
          <VStack space={4} mt="5">
            <FormInput label="Email" placeholder={"Something@email.com"}></FormInput>
              <FormInputPass label="Password" placeholder={"Password"}></FormInputPass>
              <Link _text={{ 
              fontSize: "m",
              fontWeight: "500",  
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1" onPress={()=> navigation.navigate(screen.ForgotPasswordScreen)}>
                Forget Password?
              </Link>
            
            <BlueButton title={"Log in"}
            mt="2" color="2BF0D7"
              onPress={()=> navigation.navigate('Principal')} >
            </BlueButton>
            <Link _text={{
              fontSize: "m",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1" onPress={() => navigation.navigate(screen.SignUpScreen)}>
                Sign up
              </Link> 
          </VStack>
        </Box>
        </Box>
      </Center>
      ;
  };

  export default  login;