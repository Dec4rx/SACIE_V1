import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//#region Style
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#2BF0D7',
      borderRadius: 50,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
//#endregion

const CorrectButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="check" size={25} color="#000" />
    </TouchableOpacity>
  )
}

export default CorrectButton