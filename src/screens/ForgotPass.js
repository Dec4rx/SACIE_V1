import { NativeBaseProvider, Image, Box, Center,Heading,FormControl,Input,Button,Link,Text,HStack,VStack, Row } from "native-base";
import React from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import FormInput from "../utils/components/FormInput";
import PasswordImage from "../MarcoImages/PasswordImage.png" 
 

const ForgotPass= ({navigation})=>{

    return <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="300" py="8">
            <BackButton />
        </Box>
            <Heading size= "xl" color="Black" _dark={{
          color: "warmGray.200"}} fontWeight="semibold">
                ForgotPassword?
          </Heading>
          <Box safeArea p="2" w="90%" maxW="300" py="8">
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Don't worry! It occurs. Please enter the email address linked with your account.          
            </Heading>
            <FormInput placeholder={"Enter your email"}></FormInput>
            <BlueButton title={"Send Code"} onPress={()=>navigation.navigate(screen.OTPVerificationScreen)}></BlueButton>
        </Box>
        <Box safeArea p="2" w="90%" maxW="300" py="2">
        <Link _text={{
              fontSize: "m",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1" onPress={() => navigation.navigate(screen.LoginScreen)}>
                Remember password?
              </Link>
        </Box>
        <Image  style={{
      width: 300,
    height: 300,}}
    source={PasswordImage} size="xl" />
         
    </Center>
}
export default ForgotPass;

