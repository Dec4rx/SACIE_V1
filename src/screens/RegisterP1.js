import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Switch, Modal, Alert, Button } from 'react-native';
import FormInput from '../utils/components/FormInput';
import BackButton from '../utils/components/BackButton';
import { AntDesign } from '@expo/vector-icons';

import ScreenNames from '../utils/ScreenNames';

const RegisterP1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ marginStart: 12, marginTop: 12 }}>
                <BackButton />
            </View>

            <Text style={styles.mainTitle}>Register</Text>
            <View
                style={{
                    borderBottomColor: '#F5F5F5',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                }}
            />

            <View style={{ marginTop: 15, padding: 10 }}>
                <FormInput label={'Full Name'} placeholder={'Mark Ramos'} />

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View>
                        <Text>
                            <Text style={styles.text}>Gender</Text>
                            <Text style={styles.redText}> *</Text>
                        </Text>
                        <TextInput style={styles.inputG}
                            placeholder={'Male'}
                        />

                    </View>

                    <View>
                        <Text>
                            <Text style={styles.text}>Age</Text>
                            <Text style={styles.redText}> *</Text>
                        </Text>
                        <TextInput style={styles.inputA}
                            placeholder={21}
                        />

                    </View>

                </View>
                <View style={styles.line} />

                <FormInput label={'Date of Birth'} placeholder={'July 14, 2001'} />
                <FormInput label={'Healt Condition'} placeholder={'Good'} />
                <View style={{ flexDirection: 'row-reverse' }}>
                    <TouchableOpacity style={styles.buttonNext} onPress={()=> navigation.navigate(ScreenNames.ManualRegisterPt2Screen)}>
                        <Text style={{fontSize: 20 }}>Next</Text>
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
        width: 167,
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
        width: 90
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


export default RegisterP1;