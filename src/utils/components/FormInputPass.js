import React from 'react'
import { StyleSheet, TextInput,Text, View } from 'react-native';

//#region Styles
const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 10,
    },
    input: {
      marginTop: 8,
      backgroundColor:'#FFFFFF',
      borderWidth: 1.2,
      borderColor: '#EDECF4',
      borderRadius: 22,
      padding: 10,
      fontSize: 20,
      color: '#000'
    },
    text: {
      marginBottom: 10,
      fontSize: 18,
      fontWeight: 'normal',
    },
    redText: {
      color: '#D22525'
    },
    line: {
      borderBottomColor: '#F5F5F5',
      borderBottomWidth: 1,
      marginTop: 10
    },
  });
//#endregion

const FormInputPass = ({ label, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Text>
        <Text style={styles.text}>{label}</Text>
        <Text style={styles.redText}> *</Text>
      </Text>
      <TextInput style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#828282'}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={true}
      />
      <View style={styles.line} />
    </View>
  )
}

export default FormInputPass;