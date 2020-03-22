import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './pages/Main';
import Alerta from './pages/Alerta';

const Tab = createBottomTabNavigator();

const Routes = () => (
   <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Covid" component={Alerta}></Tab.Screen>
      </Tab.Navigator>
   </NavigationContainer>
);

export default Routes;