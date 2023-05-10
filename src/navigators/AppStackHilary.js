import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from '../screens/Principal';
import Account from '../screens/Account';
import EditAccount from '../screens/EditAccount';
import Lenguage from '../screens/Lenguage';
import Notification from '../screens/Notification';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={Principal}
      screenOptions={{headerShown: false}}>
        <Stack.Screen 
            name={'Account'} 
            component={Account} 
        />
        <Stack.Screen 
            name={'Edit'} 
            component={EditAccount} 
        />
        <Stack.Screen 
        name={'Language'}
        component={Lenguage}>
        </Stack.Screen>

        <Stack.Screen
        name={'Notification'}
        component={Notification}>
        </Stack.Screen>

    </Stack.Navigator>
  )
}

export default AppStack