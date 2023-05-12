import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Switch, Modal, Alert, Button } from 'react-native';
import FormInput from '../utils/components/FormInput';
import BackButton from '../utils/components/BackButton';

import ScreenNames from '../utils/ScreenNames';

const RegisterP3 = ({navigation}) => {
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
                <FormInput label={'Blood Type'} placeholder={'O+'} />

                <FormInput label={'Income Orientation'} placeholder={'Yes'} />


                <FormInput label={'Medical Record Number'} placeholder={'No-123456'} />

                <FormInput label={'Medical Diagnostic'} placeholder={'Cancer'} />


                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.buttonRegister} onPress={()=>navigation.navigate('Drawer')}>
                        <Text style={{ fontSize: 20 }}>Register</Text>
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
    buttonRegister: {
        backgroundColor: '#2BF0D7',
        width: 184,
        height: 72,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        flexDirection: 'row'

    }
})


export default RegisterP3;