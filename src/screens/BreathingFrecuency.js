import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const BreathingFrequency = () => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return(
        <Signs title={translationObject.breFrequency}
            dbSing={'breathing_frecuency'}
            strokeColor={'#2E3AA7'}
            gradientColor={'#B8CAE3'}/>
    )
}

export default BreathingFrequency