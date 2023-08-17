import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FormInput from '../utils/components/FormInput';
import BackButton from '../utils/components/BackButton';
import { AntDesign } from '@expo/vector-icons';
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const RegisterP1 = ({ navigation }) => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    const [fullName, setFullName] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [birthday, setBirthday] = useState("")
    const [healtCond, setHealtCond] = useState(0)

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
                <FormInput label={translationObject.fullName}
                    value={fullName} onChangeText={(fullName) => { setFullName(fullName) }} />

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View>
                        <Text>
                            <Text style={styles.text}>{translationObject.gender}</Text>
                            <Text style={styles.redText}> *</Text>
                        </Text>
                        <TextInput style={styles.inputG}
                            value={gender} onChangeText={(gender) => { setGender(gender) }}
                        />

                    </View>

                    <View>
                        <Text>
                            <Text style={styles.text}>{translationObject.age}</Text>
                            <Text style={styles.redText}> *</Text>
                        </Text>
                        <TextInput style={styles.inputA}
                            value={age} onChangeText={(age) => { setAge(age) }}
                        />

                    </View>

                </View>
                <View style={styles.line} />

                <FormInput label={translationObject.birthday}
                    value={birthday} onChangeText={(birthday) => { setBirthday(birthday) }}
                />

                <FormInput label={translationObject.healtCond}
                    value={healtCond} onChangeText={(healtCond) => { setHealtCond(healtCond) }}
                />

                <View style={{ flexDirection: 'row-reverse' }}>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate(translationObject.ManualRegisterPt2Screen,
                        { fullName: fullName, gender: gender, age: age, birthday: birthday, healtCond: healtCond})}>

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