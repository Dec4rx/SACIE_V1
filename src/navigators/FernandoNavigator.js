import React from 'react'

// React navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens names
import screen from '../utils/ScreenNames';

// Screens imports
import Main from '../screens/Details'

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.DetailsScreen}
      screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
            name={screen.DetailsScreen} 
            component={Details} 
        />
    </Stack.Navigator>
  )
}

export default AppStack