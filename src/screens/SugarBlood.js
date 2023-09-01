 
import Signs from "../utils/components/TemplateSings"
import { translations } from "../utils/Strings/Lenguage"
import { I18nContext } from '../utils/components/I18nProvider';
import React, { useState, useContext, useEffect } from "react";
import { getDatabase, ref, set, push, update, onValue, get } from "firebase/database";
import { db } from "../Database";

const SugarBlood = ({route}) => {
    const { ruta } = route.params;

    const { currentLanguage } = useContext(I18nContext);
    const translationObject = translations[currentLanguage];

    const [realSings, setRealSigns] = useState([])

    const rutaCompleta=ruta;
    console.log('Dentro de Azucar en sangre, esta es la ruta: ', rutaCompleta)

    let values = []
    let data = null
    useEffect(() => {
    const getSigns = ref(db, rutaCompleta.ruta+'/vitalSigns/0/sugar_blood');
    onValue(getSigns, (snapshot) => {
        data = snapshot.val();
        console.log(data)

        for (let key in data) {
            let value = data[key]
            values.push(value)
        }
        setRealSigns(data)
    });

    }, []);
    useEffect(() => {
        console.log("real->", realSings);
        // Verificar si los datos se llenaron correctamente
        console.log("real->", values);
        if (realSings.length > 0) {
            console.log("Datos llenos correctamente");
        }
    }, [realSings]);

    return (
        <div>
            <Signs
                ruta={rutaCompleta.ruta+'/vitalSigns/0/sugar_blood'}
                title={translationObject.glucose}
                dbSing={'sugar_blood'}
                strokeColor={'#395F94'}
                gradientColor={'#5C7EAE'}
            />

        </div>
    )
}

export default SugarBlood