import React, { useContext, useState } from "react";
import { Box, Text, HStack, Center, Divider, Input, FormControl, VStack, Select } from "native-base";

import BackButton from "../utils/components/BackButton";
import MyButton from "../utils/components/MyButton";

import MainContainer from "../utils/components/MainContainer";

import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';
import { log } from "react-native-reanimated";

import { db } from "../Database";
import {
  ref,
  onValue,
  push,
  set,
} from "firebase/database";


const AddMedicine = ({ navigation, route }) => {

  const [formData, setData] = useState(
    {
      dosage_unit: '',
      dosage: 0,
      intervalas: 0,
      name: '',
      route: '',
      time: ''
    }
  );

  const Dosis = [
    {
      nom: 'Miligramos',
      valor: 'mg'
    },
    {
      nom: 'Microgramos',
      valor: 'mcg'
    }
    , {
      nom: 'Mililitros',
      valor: 'ml'
    }
  ];

  const VIAs = [
    'Via oral',
    'Via intravenosa',
    'Via intramuscular',
    'Via subcutanea',
    'Via topica',
    'Via inhalatoria',
    'Via rectal',
    'Via Oftálmolica',
    'Via Ótica',
    'Via Nasal',
    'Via Trasndermica',
    'Via Intracaneal',
    'Via Intracardiaca',
    'Via Intraocular',
    'Via Infrauterina',
    'Via Intrapulmonar',
    'Via Intraperitoneal',
  ];

  const { ruta } = route.params;
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const handleSubmit = () => {
    const starCountRef = ref(db, ruta.ruta + '/medicine'); //Ruta que uses
    const newPost  = push(starCountRef);
    set(newPost, formData);

    console, log('Datos insertados!!', formData);

    navigation.goBack();
  }

  console.log('Añadiendo una medicina en: ', ruta)

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
              {translationObject.addMed} XD
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

                <HStack space={3}>
                  <FormControl isRequired w={'70%'}>
                    <FormControl.Label
                      _text={{
                        bold: true,
                      }}
                    >
                      {translationObject.dosage}
                    </FormControl.Label>
                    <Input

                      borderRadius={"15"}
                      placeholder="30"
                      onChangeText={(value) =>
                        setData({ ...formData, dosage: value })
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

                  <FormControl isRequired w={'20%'}>
                    <FormControl.Label
                      _text={{
                        bold: true,
                      }}
                    >
                      {'Unit'}
                    </FormControl.Label>
                    <Select w={'full'}  placeholder="unit" borderRadius={"15"} _selectedItem={{
                      bg: "teal.600",
                    }} mt={1} onValueChange={(value) => setData({ ...formData, dosage_unit: value })}>
                      {Dosis.map((opcion, index) =>
                        <Select.Item key={index} label={opcion.nom} value={opcion.valor} />
                      )}

                    </Select>
                  </FormControl>
                </HStack>

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
                      setData({ ...formData, intervalas: value })
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
                  <Select w={'full'}  placeholder="unit" borderRadius={"15"} _selectedItem={{
                    bg: "teal.600",
                    
                  }} mt={1} onValueChange={(value) => setData({ ...formData, route: value })}>
                    {VIAs.map((opcion, index) =>
                      <Select.Item key={index} label={opcion} value={opcion} />
                    )}

                  </Select>
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
            onPress={() => handleSubmit()}
          />
        </Box>
      </Center>
    </MainContainer>
  );
};

export default AddMedicine;
