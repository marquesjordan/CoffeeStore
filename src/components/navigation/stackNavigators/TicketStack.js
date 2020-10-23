import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TicketScreen from '../../../screens/TicketScreen';

const Stack = createStackNavigator();

export default TicketStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Tickets" component={TicketScreen} />
    </Stack.Navigator>
  );
}


            