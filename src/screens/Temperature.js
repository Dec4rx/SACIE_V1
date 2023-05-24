import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const Temperature = () => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return(
        <Signs title={translationObject.temperature} data={'37 °C'}/>
    )
}

export default Temperature