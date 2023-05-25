import React, { useState, useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Switch, Modal, Alert, Button } from 'react-native';
import FormInput from '../utils/components/FormInput';
import BackButton from '../utils/components/BackButton';
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

import ScreenNames from '../utils/ScreenNames';

import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { db } from '../Database';
import { useRoute } from '@react-navigation/native';

const RegisterP3 = ({ navigation }) => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];


    const route = useRoute();
    const { fullName, gender, age, birthday, healtCond,
        maritalStatus, checkIn, bed, daysStay, service } = route.params;

    console.log(maritalStatus)

    const [bloodType, setBloodType] = useState("")
    const [incomeOr, setIncomeOr] = useState("")
    const [medRecNum, setMedRecNum] = useState("")
    const [medDiag, setmMedDiag] = useState("")

    const postPatient = async () => {
        const db = getDatabase();
        const postListRef = ref(db, 'Pacient/')
        const newPostRef = push(postListRef);
        set(newPostRef, {
            "name": fullName,//
            "gender": gender,//
            "age": age,//
            "birthday": birthday,//
            "condition": healtCond,//
            "status": maritalStatus,//
            "check_in": checkIn,
            "bed": bed,//
            "days": daysStay,//
            "service": service,
            "blood": bloodType,//
            "incomeOr": incomeOr,
            "medRecNum": medRecNum,
            "medDiag": medDiag
        }).then(() => {
            console.log('si')
            navigation.navigate(translationObject.MenuScreen, {name: fullName})
        }
        )
    }

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
                <FormInput label={translationObject.bloodType}
                    value={bloodType} onChangeText={(bloodType) => { setBloodType(bloodType) }} />

                <FormInput label={translationObject.incomeOr}
                    value={incomeOr} onChangeText={(incomeOr) => { setIncomeOr(incomeOr) }} />


                <FormInput label={translationObject.medRecNum}
                    value={medRecNum} onChangeText={(medRecNum) => { setMedRecNum(medRecNum) }} />

                <FormInput label={translationObject.medDiag}
                    value={medDiag} onChangeText={(medDiag) => { setmMedDiag(medDiag) }} />


                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.buttonRegister} onPress={
                        postPatient
                    }>
                        <Text style={{ fontSize: 20 }}>{translationObject.register}</Text>
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