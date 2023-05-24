import React, { useEffect, useRef, useContext } from 'react'
import { Animated, Dimensions, View, StyleSheet, Image, Text } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '../resources/pictures/LogoGota.png';
import BlueButton from '../utils/components/BlueButton';
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const SplashScreen = ({ navigation }) => {
    const edges = useSafeAreaInsets();

    const startAnimation = useRef(new Animated.Value(0)).current;

    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    //#region Efecto
    useEffect(() => {
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        toValue: -Dimensions.get('window').height + (edges.top + 65),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        toValue: 0.3,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        toValue: 0.8,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        toValue: {
                            x: (Dimensions.get("window").width / 2) + 100,
                            y: (Dimensions.get('window').height / 2) + 100
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveTitle,
                    {
                        toValue: {
                            x: 0,
                            y: (Dimensions.get('window').height / 2) - 90,
                        },
                        useNativeDriver: true
                    }
                ),
            ]).start();
        }, 500);
    }, [])
    //#endregion

    return (
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <Animated.View style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                zIndex: 1,
                transform: [{ translateY: startAnimation }]
            }}>

                <Animated.View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Animated.Image source={Logo} style={{
                        width: 100,
                        height: 100,
                        transform: [
                            { translateX: moveLogo.x },
                            { translateY: moveLogo.y },
                            { scale: scaleLogo },
                        ]
                    }}></Animated.Image>

                    <Animated.Text style={{
                        fontSize: 50,
                        fontWeight: 'bold',
                        color: '#202020',
                        transform: [
                            { translateY: moveTitle.y },
                            { scale: scaleTitle },
                            { color: '#FFFFFF' },
                        ]
                    }}>SACIE</Animated.Text>
                </Animated.View>
            </Animated.View>
            {/* Welcome view */}
            <View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
            }}>
                <View style={styles.container}>
                    <Text style={styles.title}>{translationObject.welcome2}</Text>
                    <Text style={styles.sacie}>SACIE</Text>
                    <Image
                        source={require('../resources/pictures/main.png')}
                        style={styles.image}
                    />
                    <View style={{ alignItems: 'stretch', width: '90%' }}>
                        <View style={{ marginBottom: 15 }}>
                            <BlueButton onPress={() => navigation.navigate(translationObject.LoginScreen)} title={translationObject.start} />
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    );
}

//#region Styles of Welcome part
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    sacie: {
        fontSize: 64,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 325,
        height: 323,
        marginBottom: 20,
    },
});
//#endregion
export default SplashScreen