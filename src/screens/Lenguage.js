// import React, { useState } from "react";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackButton from "../utils/components/BackButton";
import MainContainer from "../utils/components/MainContainer";
import { I18nContext } from '../utils/components/I18nProvider';

// import { translations } from "../utils/Strings/Lenguage"
// import * as Localization from 'expo-localization';
// import { I18n } from 'i18n-js';

const Lenguage = ({ navigation }) => {

  // const i18n = new I18n(translations);

  const { currentLanguage, changeLanguage } = useContext(I18nContext);
  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };
  // const [locale, setLocale] = useState(Localization.locale);
  // i18n.locale = locale;
  // i18n.enableFallback = true;

  return (
    <MainContainer>
      <TouchableOpacity onPress={() => handleLanguageChange('en')}>
        <View style={styles.profileContainer}>
          <View style={styles.item}>
            <Text style={styles.title}>{currentLanguage === 'en' ? 'English (Selected)' : 'English'}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLanguageChange('esp')}>
        <View style={styles.profileContainer}>
          <View style={styles.item}>
            <Text style={styles.title}>{currentLanguage === 'esp' ? 'Español (Seleccionado)' : 'Español'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </MainContainer>
  );
};

// return (
//   <MainContainer>
//     <View style={styles.header}>
//       <BackButton />
//       <Text style={styles.mainTitle}>{i18n.t('language')}</Text>
//     </View>
//     {locale !== "en" ?
//     <TouchableOpacity onPress={()=> setLocale("en")}>
//       <View style={styles.profileContainer}>
//         <View style={styles.item}>
//           <Text style={styles.title}>{i18n.t('eng')}</Text>
//         </View>
//       </View>
//     </TouchableOpacity> : undefined}
//     {locale !== "esp" ?
//     <TouchableOpacity onPress={()=> setLocale("esp")}>
//       <View style={styles.profileContainer}>
//         <View style={styles.item}>
//           <Text style={styles.title}>{i18n.t('spa')}</Text>
//         </View>
//       </View>
//     </TouchableOpacity> : undefined}
//   </MainContainer>
// );
// };

//#region Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  background: {
    flex: 1,
    backgroundColor: "#B8CAE4",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  header: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  headerButton: {
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileContainer: {
    alignItems: "left",
    marginVertical: 20,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#67A4F7",
  },
  mainTitle: {
    fontSize: 36,
    marginVertical: 5,
    marginHorizontal: 20,
    color: "#000000",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#ffff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
//#endregion
export default Lenguage;
