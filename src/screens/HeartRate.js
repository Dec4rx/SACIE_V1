import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const HeartRate = ({route}) => {
    const { ruta } = route.params;
    const rutaCompleta = ruta; 
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return(
        <Signs 
        ruta={rutaCompleta.ruta + '/vitalSigns/0/'}
            title={translationObject.heartRate}
            dbSing={'heart_rate'}
            strokeColor={'#1D5FBD'}
            gradientColor={'#B8CAE3'}
        />
    )
}

export default HeartRate