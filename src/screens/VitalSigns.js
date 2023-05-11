import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const VitalSigns = ({navigation}) => {
    return (

        <View style={styles.container}>
            <Text style={styles.mainTitle}>Vital Signs</Text>
            <View
                style={{
                    borderBottomColor: '#F5F5F5',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                }}
            />

            <View style={styles.imageRow}>
                <TouchableOpacity onPress={()=> navigation.navigate('SugarBlood')} >
                    <Image
                    
                        source={require("../resources/pictures/SugarBlood.png")}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Temperature')}>
                    <Image
                        source={require("../resources/pictures/Temperature.png")}
                        resizeMode="contain"
                        style={styles.image2}
                    ></Image>
                </TouchableOpacity>
            </View>


            <View style={styles.image2Row}>
                <TouchableOpacity onPress={()=> navigation.navigate('HR')}>
                    <Image
                        source={require("../resources/pictures/HeartRate.png")}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('BloodPressure')}>
                    <Image
                        source={require("../resources/pictures/BloodPreasure.png")}
                        resizeMode="contain"
                        style={styles.image2}
                    ></Image>
                </TouchableOpacity>
            </View>


            <View style={styles.image2Row}>
                <TouchableOpacity onPress={()=> navigation.navigate('BF')}>
                    <Image
                        source={require("../resources/pictures/BreathingFrequency.png")}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('OX')}>
                    <Image
                        source={require("../resources/pictures/Oxygenation.png")}
                        resizeMode="contain"
                        style={styles.image2}
                    ></Image>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.image2Row}>{()=> navigation.navigate('HC')} 
                <Image
                    source={require("../resources/pictures/HealtCondition.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
            </TouchableOpacity>
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
        flex: 1
    },
    image: {//ok
        width: 140,
        height: 140
    },
    image2: {//ok
        width: 140,
        height: 140,
        marginLeft: 5
    },
    imageRow: {//ok
        marginTop: 10,
        height: 119,
        flexDirection: "row",
        marginLeft: 50,
        marginRight: 50
    },
    image2Row: {//ok
        marginTop: 25,
        height: 119,
        flexDirection: "row",
        marginLeft: 50,
        marginRight: 50
    },
});

export default VitalSigns