import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const QRScanner = () => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
        getBarCodeScannerPermissions();
      }, []);

    const handleBarCodeScanned = ({ data }) => {
      setScanned(true);
      setDataList(prevDataList => [...prevDataList, data]);
      
    };
  
    return (
      <View style={{ flex: 1 }}>
        {hasPermission === null ? (
          <Text>{translationObject.camPermission}</Text>
        ) : hasPermission === false ? (
          <Text>{translationObject.noPermission}</Text>
        ) : (
          <View style={{ flex: 1 }}>
            <BarCodeScanner
              style={{ flex: 1 }}
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
            {scanned && (
              <Text style={{ alignSelf: 'center' }}>
                {translationObject.scanned}: {dataList[dataList.length - 1]}
              </Text>
            )}
          </View>
        )}
      </View>
    );
  };
  
  export default QRScanner;
  