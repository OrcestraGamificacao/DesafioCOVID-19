import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './pages/Main/index';
import Graph from './pages/Graph/index'

const Tab = createBottomTabNavigator();

const Routes = () => (
   <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen name="Covid" component={Graph}></Tab.Screen>
      </Tab.Navigator>
   </NavigationContainer>
);

export default Routes;