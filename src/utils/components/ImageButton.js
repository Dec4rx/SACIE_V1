import React from 'react'
import { Text ,StyleSheet, TouchableOpacity, Image } from 'react-native';

//#region Styles
const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#67A4F7',
      borderColor: '#DFDFDF',
        padding: 10,
        borderRadius: 24,
        borderWidth: 1.5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        textSize: '14',
        marginLeft: 10,
      },
  });
//#endregion

const ImageButton = ({ onPress, image, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={image} // Ruta de la imagen
        style={{ width: 20, height: 20 }}
      />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ImageButton