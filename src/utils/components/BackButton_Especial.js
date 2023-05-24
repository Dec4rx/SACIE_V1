import React, {useContext} from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { translations } from "../Strings/Lenguage"
import { I18nContext } from '../components/I18nProvider';

//#region Style
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 12,
      borderColor: 'E8ECF4',
      borderWidth: '2',
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
  //#endregion

const BackButton = () => {
  const navigation = useNavigation();
  const { currentLanguage } = useContext(I18nContext);
  const translationObject = translations[currentLanguage];

  const handlePress = () => { navigation.navigate(translationObject.MenuScreen); };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Icon name="chevron-back-outline" size={24} color="#1E232C" />
    </TouchableOpacity>
  )
}

export default BackButton