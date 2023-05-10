import { NativeBaseProvider, Image, Box, Center,Heading,FormControl,Input,Button,Link,Text,HStack,VStack, Row } from "native-base";
import React from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import NumericInput from "../utils/components/NumericInput";

const OTPVerification=({navigation})=>{

    return <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="300" py="8">
        <Heading style={{fontSize: 32,}} fontWeight="semibold">
            OTP Verification
        </Heading>
        <Box  w="90%" maxW="300" py="8">
        <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="s">
            Enter the verification code we just sent on your email address. 
        </Heading>
        </Box>
        <Row w="90%" maxW="300" py="8" >
        <NumericInput placeholder={"0"}></NumericInput>
        <NumericInput placeholder={"0"}></NumericInput>
        <NumericInput placeholder={"0"}></NumericInput>
        <NumericInput placeholder={"0"}></NumericInput>
        </Row>
        <Box  w="90%" maxW="300" py="8">
        <BlueButton title={"Verify"} onPress={()=>navigation.navigate(screen.ResetPasswordScreen)}></BlueButton>
        </Box >
        <Box safeArea p="2" w="90%" maxW="300" py="2">
        <Row>
        <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="s">
            Didn’t received the code?
        </Heading>
        <Link _text={{
              fontSize: "m",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Resend
              </Link>
            </Row>
        </Box>
        </Box>
    </Center>
    
}
export default OTPVerification;

