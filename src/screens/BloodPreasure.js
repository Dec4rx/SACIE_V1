import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const BloodPressure = () => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return(
        <Signs title={translationObject.pressure} data={'12 rmp'}/>
    )
}

export default BloodPressure