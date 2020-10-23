import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from '../../../screens/MenuScreen';

const Stack = createStackNavigator();

export default MenuStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}


            