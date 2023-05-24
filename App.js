//rafce *les crea la estructura basica
import { NativeBaseProvider } from "native-base";
// React navigation
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from "./src/navigators/AppNavigation";
import Translations from './src/utils/components/Translations'
import { I18nProvider } from './src/utils/components/I18nProvider'


export default function App() {
  return (
    <I18nProvider>
    <NavigationContainer >
      <NativeBaseProvider>
        <AppNavigation/>
      </NativeBaseProvider>
    </NavigationContainer>
    </I18nProvider>
  );
}

