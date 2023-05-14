import React from "react";
import {
  Box,
  Text,
  HStack,
  Center,
  Divider,
  Input,
  FormControl,
  VStack,
} from "native-base";

import BackButton from "../utils/components/BackButton";
import MyButton from "../utils/components/MyButton";

import MainContainer from "../utils/components/MainContainer";
import ScreenNames from "../utils/ScreenNames";

const AddMedicine = ({ navigation }) => {
  return (
    <MainContainer>
      <Box>
        <HStack justifyContent={"space-between"}>
          <Box width={"20%"} >
            <BackButton />
          </Box>
          <Center>
            <Text
              textAlign={"center"}
              justifyContent={"center"}
              fontSize={"30"}
              fontWeight={"bold"}
            >
              {"Add\nMedicine"}
            </Text>
          </Center>
          <Box width={"20%"}></Box>
        </HStack>
      </Box>

      <Box>
        <Center >
          <Divider  />

          <Box my={2}  w={'full'} >
            <Center >
              <VStack w={'full'} >
                <FormControl isRequired w={'full'}>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    Medicine Name
                  </FormControl.Label>
                  <Input
                    borderRadius={"15"}
                    placeholder="Penisiline"
                    onChangeText={(value) =>
                      setData({ ...formData, name: value })
                    }
                  />
                  <FormControl.HelperText
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Name should contain atleast 3 character.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Error Name
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isRequired>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    Dosage
                  </FormControl.Label>
                  <Input
                    borderRadius={"15"}
                    placeholder="30gr   "
                    onChangeText={(value) =>
                      setData({ ...formData, name: value })
                    }
                  />
                  <FormControl.HelperText
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Name should contain atleast 3 character.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Error Name
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isRequired>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    Intervals between
                  </FormControl.Label>
                  <Input
                    borderRadius={"15"}
                    placeholder="6hrs"
                    onChangeText={(value) =>
                      setData({ ...formData, name: value })
                    }
                  />
                  <FormControl.HelperText
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Name should contain atleast 3 character.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Error Name
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isRequired>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    VIA
                  </FormControl.Label>
                  <Input
                    borderRadius={"15"}
                    placeholder="IV "
                    onChangeText={(value) =>
                      setData({ ...formData, name: value })
                    }
                  />
                  <FormControl.HelperText
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Name should contain atleast 3 character.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Error Name
                  </FormControl.ErrorMessage>
                </FormControl>
              </VStack>
            </Center>
          </Box>
          
        </Center>
      </Box>
      <Center>
        <Box w={"full"}>
          <MyButton
            title={"Add"}
            onPress={() => navigation.navigate(ScreenNames.DetailsScreen)}
          />
        </Box>
      </Center>
    </MainContainer>
  );
};

export default AddMedicine;
