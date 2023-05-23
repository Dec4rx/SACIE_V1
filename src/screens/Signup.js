import {
  NativeBaseProvider,
  Image,
  Box,
  Center,
  Heading,
  FormControl,
  Input,
  Button,
  Link,
  Text,
  HStack,
  VStack,
  Row,
  Checkbox,
} from "native-base";
import React, { useState, useEffect } from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import Enf_2 from "../MarcoImages/Enf_2.png";
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";

import ScreenNames from "../utils/ScreenNames";
import MainContainer from "../utils/components/MainContainer";

import data from "../utils/Strings/StringsEng.json"

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseConfig } from "../config";
import {initializeApp} from "firebase/app";
import { db } from "../Database";
import {set , ref, push} from "firebase/database";

const Signup = ({ navigation }) => {
  const [Email, setEmail]= useState('');
   const [Password, setPassword]= useState('');
   const [name, setName] = useState('');
   const [lastname, setLastName] = useState('');
   const app = initializeApp(firebaseConfig)
   const auth = getAuth(app)
  
  const createUser= async(email,password)=>{
    
      createUserWithEmailAndPassword(auth,email, password).then((userCredential)=>{
        console.log('usuario creado')
        const user= userCredential.user;
        const id= userCredential.user.uid;
        
        
        set(ref(db, 'Nurses/'+id),{
          username: name,
          lastname: lastname,
          email: Email,
          password: Password
        });
        set(ref(db, 'Pacient/'+id),{
          patient: {
            name: "",
            age: "",
            bed: "",
            birthday: "",
            blood: "",
            check_in: "",
            condition: "",
            date: "",
            days: "",
            diagnostic: "",
            gender: "",
            medicine: [
                {
                    name: "",
                    dosis: "",
                    intervals: "",
                    time: "",
                    route: ""
                }
            ],
            stauts: "",
            vitalSigns: [
                {
                    blood_presure: [
                        {
                            x: "",
                            y: ""
                        },
                        {
                            x: "",
                            y: ""
                        }
                    ],
                    breathing_frecuency: [
                        {
                            x: "",
                            y: ""
                        },
                        {
                            x: "",
                            y: ""
                        }
                    ],
                    healt_condition: [
                        {
                            x: "",
                            y: ""
                        },
                        {
                            x: "",
                            y: ""
                        }
                    ],
                    heart_rate: [
                        {
                            x: "",
                            y: ""
                        },
                        {
                            x: "",
                            y: ""
                        }
                    ],
                    oxygenation: [
                        {
                            x: "",
                            y: ""
                        },
                        {
                            x: "",
                            y: ""
                        }
                    ],
                    sugar_blood: [
                        {
                            x: "",
                            y: ""
                        },
                        {
                            x: "",
                            y: ""
                        }
                    ],
                    temperature: [
                        {
                            x: "",
                            y: ""
                        },
                        {
                            x: "",
                            y: ""
                        }
                    ]
                }
            ]
        }
        });
      })
  }   
  return (
    <MainContainer>
      <Center>
        <Box safeArea w={"full"} py="8" flexDirection={"row"}>
          <BackButton />
        </Box>
        <Image
          style={{
            width: 250,
            height: 250,
          }}
          source={Enf_2}
          size="xl"
        />
        <Heading style={{ fontSize: 32 }} fontWeight="semibold">
          {data.SignUp.Welcome}
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          {data.SignUp.SignUpCon}
        </Heading>
        <Box safeArea py="8" w={"full"}>
          <VStack space={3} mt="5">
            <FormInput label={data.SignUp.Name} onChangeText={(name)=>setName(name)}></FormInput>
            <FormInput label={data.SignUp.LastName}onChangeText={(lastname)=>setLastName(name)}></FormInput>
            <FormInput label={data.SignUp.Email}  onChangeText={(Email)=> setEmail(Email)}></FormInput>
            <FormInputPass
              label={data.SignUp.Password}
              placeholder={data.SignUp.MinPass}
            ></FormInputPass>
            <FormInputPass
              label={data.SignUp.ConfPass}
              placeholder={data.SignUp.IdentPass} onChangeText={(Password)=> setPassword(Password)}
            ></FormInputPass>

            <BlueButton
              title={data.SignUp.SignUp}
              onPress={() => createUser(Email,Password)}
            ></BlueButton>
            <Center>
              <Text>
                {data.SignUp.AlreadyAccount}
                <Link
                  _text={{
                    fontSize: "m",
                    fontWeight: "500",
                    color: "indigo.500",
                    textDecoration: "none",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                  onPress={() => navigation.navigate(screen.LoginScreen)}
                >
                  {data.SignUp.Login}
                </Link>
              </Text>
            </Center>
            <Center>
              <Checkbox fontSize={"md"}>
                {data.SignUp.Policy}
                <Link
                  onPress={() =>
                    navigation.navigate(
                      ScreenNames.TermnsAndConditionsCheckBoxScreen
                    )
                  }
                  my={"auto"}
                  _text={{ fontSize: "m", color: "indigo.500", fontWeight: '500', textDecoration: 'none' }}
                >
                  {data.SignUp.TAndC}
                </Link>
              </Checkbox>
            </Center>
          </VStack>
        </Box>
      </Center>
    </MainContainer>
  );
};

export default Signup;
