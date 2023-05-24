import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const BreathingFrequency = () => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return(
        <Signs title={translationObject.breFrequency} data={'12 rmp'}/>
    )
}

export default BreathingFrequency