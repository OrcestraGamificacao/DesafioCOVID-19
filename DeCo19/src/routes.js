import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './pages/Main';
import Alerta from './pages/AlertaPage';
import alertaScreen from './components/Alerta';

const Tab = createBottomTabNavigator();

const Routes = () => (
   <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen component={alertaScreen}></Tab.Screen>
      </Tab.Navigator>
   </NavigationContainer>
);

export default Routes;