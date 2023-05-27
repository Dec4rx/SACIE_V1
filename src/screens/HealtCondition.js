import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const HealtCondition = () => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return (
        <Signs title={translationObject.healtCondSpace}
            dbSing={'healt_condition'}
            strokeColor={'#EC2306'}
            gradientColor={'#FB3013'} />
    )
}

export default HealtCondition