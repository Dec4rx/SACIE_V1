import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const Temperature = ({ route }) => {
    const { ruta } = route.params;
    const rutaCompleta = ruta; 
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return (
        <Signs title={translationObject.temperature}
            ruta={rutaCompleta.ruta + '/vitalSigns/0/'}
            dbSing={'temperature'}
            strokeColor={'#800B0B'}
            gradientColor={'#B8CAE3'} />
    )
}

export default Temperature