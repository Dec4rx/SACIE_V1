import React, { useContext } from "react";
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';

const Oxygenation = () => {
    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    return(
        <Signs title={translationObject.oxygen}
            dbSing={'oxygenation'}
            strokeColor={'#563994'}
            gradientColor={'#B8CAE3'}/>
    )
}

export default Oxygenation