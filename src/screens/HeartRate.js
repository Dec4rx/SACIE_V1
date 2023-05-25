import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const HeartRate = () => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return(
        <Signs 
            title={translationObject.heartRate}
            dbSing={'heart_rate'}
            strokeColor={'#1D5FBD'}
            gradientColor={'#B8CAE3'}
        />
    )
}

export default HeartRate