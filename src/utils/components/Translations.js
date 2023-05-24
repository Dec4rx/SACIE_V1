import { I18n } from 'i18n-js';
import { translations } from "../Strings/Lenguage"

const i18n = new I18n(translations);
i18n.defaultLocale = 'en'; // Idioma predeterminado
i18n.locale = 'en'; // Idioma actual

export default i18n;
