import { NativeBaseProvider, Image, Box, Center,Heading,FormControl,Input,Button,Link,Text,HStack,VStack, Row } from "native-base";
import React from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import FormInputPass from "../utils/components/FormInputPass";
import Likeimage from "../MarcoImages/Likeimage.png";

const PasswordChanged = ({navigation})=>{
    return <Center>
        <Box safeArea p="2" py="8" w="90%" maxW="300">
        <Image  style={{
                        width: 250,
                        height: 250,}}
                        source={Likeimage} size="xl" />
            <Heading style={{fontSize: 28,}} fontWeight="semibold">
                Create New Password
            </Heading>
            <Box safeArea p="1" py="4" w="90%" maxW="300">
            <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" fontSize={16} textAlign={"left"}>
            Your new password must be unique from those previously used.        </Heading>
            </Box>
            <FormInputPass label={"Enter new Password"} placeholder={"Min Password-lenght 8 Characters"}></FormInputPass>
            <FormInputPass label={"Confirm Password"} placeholder={"Passwords must be identical"}></FormInputPass>
            <BlueButton title={"Reset Password"} onPress={()=> navigation.navigate(Screen.PasswordChanged)}></BlueButton>
        </Box>
    </Center>
}
export default PasswordChanged;