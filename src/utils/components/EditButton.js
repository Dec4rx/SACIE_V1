import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

//#region Style
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#b1f9f0',
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });
//#endregion

const EditButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Feather name="edit" size={25} color="black" />
    </TouchableOpacity>
  )
}

export default EditButton