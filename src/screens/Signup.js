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
import React from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import Enf_2 from "../MarcoImages/Enf_2.png";
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";

import ScreenNames from "../utils/ScreenNames";
import MainContainer from "../utils/components/MainContainer";

import data from "../utils/Strings/StringsEng.json"

const Signup = ({ navigation }) => {
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
            <FormInput label={data.SignUp.Name}></FormInput>
            <FormInput label={data.SignUp.LastName}></FormInput>
            <FormInput label={data.SignUp.Email}></FormInput>
            <FormInputPass
              label={data.SignUp.Password}
              placeholder={data.SignUp.MinPass}
            ></FormInputPass>
            <FormInputPass
              label={data.SignUp.ConfPass}
              placeholder={data.SignUp.IdentPass}
            ></FormInputPass>

            <BlueButton
              title={data.SignUp.SignUp}
              onPress={() => alert("No hay Home")}
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
