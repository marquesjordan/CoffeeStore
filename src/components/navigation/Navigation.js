import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import MenuStack from './stackNavigators/MenuStack';
import TicketStack from './stackNavigators/TicketStack';

const Tab = createBottomTabNavigator();

export default Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Menu"
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 20
                    }
                }}
            >
                <Tab.Screen
                    name="Menu"
                    component={MenuStack}
                
                />
                <Tab.Screen
                    name="Tickets"
                    component={TicketStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
} 