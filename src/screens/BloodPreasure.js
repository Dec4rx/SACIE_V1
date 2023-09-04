import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const BloodPressure = ({route}) => {
    const { ruta } = route.params;
    const rutaCompleta = ruta;
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return( 
        <Signs 
        ruta={rutaCompleta.ruta + '/vitalSigns/0/'}
        title={translationObject.pressure}
        dbSing={'blood_presure'}
        strokeColor={'#163296'}
        gradientColor={'#798AC3'}/>
    )
}

export default BloodPressure