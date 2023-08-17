import React, { useContext } from "react";
import { Box, Text, HStack, Center, Divider, Input, FormControl, VStack } from "native-base";

import BackButton from "../utils/components/BackButton";
import MyButton from "../utils/components/MyButton";

import MainContainer from "../utils/components/MainContainer";

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const AddMedicine = ({ navigation }) => {

  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

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
              {translationObject.addMed}
            </Text>
          </Center>
          <Box width={"20%"}></Box>
        </HStack>
      </Box>

      <Box>
        <Center >
          <Divider />

          <Box my={2} w={'full'} >
            <Center >
              <VStack w={'full'} >
                <FormControl isRequired w={'full'}>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    {translationObject.medName}
                  </FormControl.Label>
                  <Input
                    borderRadius={"15"}
                    placeholder={translationObject.medNamePH}
                    onChangeText={(value) =>
                      setData({ ...formData, name: value })
                    }
                  />
                  <FormControl.HelperText
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    {translationObject.errorMsg}
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Error
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isRequired>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    {translationObject.dosage}
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
                    {translationObject.errorMsg}
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Error
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isRequired>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    {translationObject.intervals}
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
                    {translationObject.errorMsg}
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Error
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isRequired>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}
                  >
                    {translationObject.via}
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
                    {translationObject.errorMsg}
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}
                  >
                    Error
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
            title={translationObject.add}
            onPress={() => navigation.navigate(translationObject.DetailsScreen)}
          />
        </Box>
      </Center>
    </MainContainer>
  );
};

export default AddMedicine;
