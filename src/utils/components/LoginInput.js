import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

//#region Styles
const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 10,
    },
    input: {
      backgroundColor:'#fff',
      borderWidth: 1.2,
      borderColor: '#EDECF4',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      color: '#62635C'
    },
  });
//#endregion

const LoginInput = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default LoginInput