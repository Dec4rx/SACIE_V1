import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FormInput from '../utils/components/FormInput';
import BackButton from '../utils/components/BackButton';
import { AntDesign } from '@expo/vector-icons';

import ScreenNames from '../utils/ScreenNames';
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const RegisterP2 = ({navigation}) => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return (
        <View style={styles.container}>
            <View style={{ marginStart: 12, marginTop: 12 }}>
                <BackButton />
            </View>

            <Text style={styles.mainTitle}>{translationObject.register}</Text>
            <View
                style={{
                    borderBottomColor: '#F5F5F5',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                }}
            />

            <View style={{ marginTop: 15, padding: 10 }}>
                <FormInput label={translationObject.maritalStatus} placeholder={'Soltero'} />

                <FormInput label={translationObject.checkIn} placeholder={'Junio 23, 7:00 AM'} />

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View>
                        <Text>
                            <Text style={styles.text}>{translationObject.bed}</Text>
                            <Text style={styles.redText}> *</Text>
                        </Text>
                        <TextInput style={styles.inputG}
                            placeholder={'3'}
                        />

                    </View>

                    <View>
                        <Text>
                            <Text style={styles.text}>{translationObject.daysStay}</Text>
                            <Text style={styles.redText}> *</Text>
                        </Text>
                        <TextInput style={styles.inputA}
                            placeholder={4}
                        />

                    </View>

                </View>
                <View style={styles.line} />

                <FormInput label={translationObject.service} placeholder={'Cirugía'} />
                <View style={{ flexDirection: 'row-reverse' }}>
                    <TouchableOpacity style={styles.buttonNext} onPress={()=> navigation.navigate(translationObject.ManualRegisterPt3Screen)}>
                        <Text style={{ fontSize: 20 }}>{translationObject.next}</Text>
                        <AntDesign name="right" size={20} color="black" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    mainTitle: {
        textAlign: 'center',
        fontSize: 36,
        color: '#000000',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
    },
    inputContainer: {
        marginBottom: 10,
    },
    inputG: {
        marginTop: 8,
        backgroundColor: '#F4F4F5',
        borderWidth: 1.2,
        borderColor: '#EDECF4',
        borderRadius: 22,
        padding: 10,
        fontSize: 20,
        color: '#000',
        width: 139,
        marginEnd: 35
    },
    inputA: {
        marginTop: 8,
        backgroundColor: '#F4F4F5',
        borderWidth: 1.2,
        borderColor: '#EDECF4',
        borderRadius: 22,
        padding: 10,
        fontSize: 20,
        color: '#000',
        width: 139
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
        marginTop: 10,
        marginBottom: 10
    },
    buttonNext: {
        backgroundColor: '#2BF0D7',
        width: 107,
        height: 72,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        flexDirection: 'row'

    }
})


export default RegisterP2;