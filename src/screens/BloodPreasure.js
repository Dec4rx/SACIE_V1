import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Switch, Modal, Alert, Button } from 'react-native';
import FormInput from '../utils/components/FormInput';
import BlueButton from '../utils/components/BlueButton';
import BackButton from '../utils/components/BackButton';
import { AntDesign, Feather } from '@expo/vector-icons';

const BloodPreasure = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ marginStart: 12, marginTop: 12 }}>
                    <BackButton onPress={()=> navigation.goBack()} />
                </View>

                <Text style={styles.mainTitle}>Blood Preasure</Text>
                <View
                    style={{
                        borderBottomColor: '#F5F5F5',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginTop: 5,
                    }}
                />
                <Text style={styles.secondaryTitle}>Blood Preasure</Text>
                <Text style={styles.dataTitle}>120/80 mm Hg</Text>
                <Image source={require("../resources/pictures/G1.png")} style={styles.image}></Image>

                <View style={styles.setvalues}>
                    <FormInput label={'Time'} placeholder={'7:00a.m.'} value={'7:00 a.m.'}></FormInput>
                    <FormInput label={'Value'} placeholder={0} value={1} />
                    <BlueButton title={'Add'} onPress={() => setModalVisible(true)} />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={{ marginTop: 30 }}>
                        <Text style={styles.text}>Set Alarm In Intervals Of</Text>
                        <Switch
                            style={{ marginStart: 120 }}
                            trackColor={{ false: '#B8CAE4', true: '#60E532' }}
                            thumbColor={isEnabled ? '#B8CAE4' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                    </Text>
                    <TextInput style={styles.input} />
                    <View style={styles.line} />
                </View>


                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>

                    <View style={styles.centeredView}>


                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.closeModal} onPress={() => setModalVisible(!modalVisible)}>
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>

                            <Text style={styles.modalTitle}>Are you sure about the data?</Text>

                            <Text style={styles.modalText}> <b>Time:</b> <Text>7:00 a.m.</Text></Text>
                            <Text style={styles.modalText}> <b>Value:</b> <Text>1</Text></Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                <TouchableOpacity style={styles.okModal} onPress={() => setModalVisible(!modalVisible)}>
                                    <Feather name="check" size={24} color="black" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.noModal} onPress={() => setModalVisible(!modalVisible)}>
                                    <AntDesign name="close" size={24} color="black" />
                                </TouchableOpacity>

                            </View>
                        </View>




                    </View>
                </Modal>

            </ScrollView>
        </SafeAreaView>
    )
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
    secondaryTitle: {
        marginTop: 15,
        marginStart: 10,
        fontSize: 20,
        color: '#8E8E93'
    },
    dataTitle: {
        marginStart: 10,
        fontSize: 40,
    },
    image: {//ok
        width: 315,
        height: 250,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    inputContainer: {
        marginBottom: 10,
        padding: 10
    },
    input: {
        marginTop: 8,
        backgroundColor: '#F4F4F5',
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        marginBottom: 2,
        textAlign: 'center',
        color: '#67A4F7',
        fontWeight: 'bold'
    },
    modalText: {
        marginBottom: 2,
        textAlign: 'center',
        color: '#62635C'
    },
    closeModal: {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    okModal: {
        borderRadius: 100,
        backgroundColor: '#2BF0D7',
        padding: 4,
        margin: 4
    },
    noModal: {
        borderRadius: 100,
        backgroundColor: '#FA0000',
        padding: 4,
        margin: 4
    },
    setvalues: {
        padding: 10
    }
})

export default BloodPreasure