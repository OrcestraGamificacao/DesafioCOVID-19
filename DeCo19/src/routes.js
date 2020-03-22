import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './pages/Main';
import Exit from './pages/Exit';

const Tab = createBottomTabNavigator();

const Routes = () => (
   <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen name="Covid" component={Exit}></Tab.Screen>
      </Tab.Navigator>
   </NavigationContainer>
);

export default Routes;