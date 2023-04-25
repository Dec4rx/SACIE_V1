import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

//#region Styles
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FA0000',
      borderRadius: 50,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
//#endregion

const ErrorButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="times" size={25} color="#000" />
    </TouchableOpacity>
  )
}

export default ErrorButton