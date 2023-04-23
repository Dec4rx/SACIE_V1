import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

//#region Style
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderColor: '#67A4F7',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1.5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, //propiedad específica de Android, mayor que cero, se activa la sombra predeterminada de Android
      },
      buttonText: {
        color: '#67A4F7',
        fontWeight: 'normal',
        textAlign: 'center',
        textSize: '18'
      },
  });
  //#endregion

const BorderButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BorderButton