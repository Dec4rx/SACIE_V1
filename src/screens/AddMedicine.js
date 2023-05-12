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
import ScreenNames from "../utils/ScreenNames";

const AddMedicine = ({navigation}) => {
  return (
    <Box>
      <Box m={3} id="xd">
        <HStack justifyContent={"space-between"}>
          <Box width={"20%"}>
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
        <Center p={3}>
          <Divider />
          <Box>
            <Center>
              <VStack width="90%" mx="3" maxW="300px">
                <FormControl isRequired>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    Patient
                  </FormControl.Label>
                  <Input
                    borderRadius={"15"}
                    placeholder="Patient Name"
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

          <Divider mx={2} />

          <Box my={2}>
            <Center>
              <VStack width="90%" mx="3" maxW="300px">
                <FormControl isRequired>
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
              </VStack>
            </Center>
          </Box>
          <Divider mx={2} />

          <Box my={2}>
            <Center>
              <VStack width="90%" mx="3" maxW="300px">
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
              </VStack>
            </Center>
          </Box>
          <Divider mx={2} />

          <Box my={2}>
            <Center>
              <VStack width="90%" mx="3" maxW="300px">
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
              </VStack>
            </Center>
          </Box>
          <Divider mx={2} />

          <Box my={2}>
            <Center>
              <VStack width="90%" mx="3" maxW="300px">
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
      <Center m={3}>
        <Box w={"70%"}>
          <MyButton title={"Add"} onPress={()=>navigation.navigate('Drawer')} />
        </Box>
      </Center>
    </Box>
  );
};

export default AddMedicine;
