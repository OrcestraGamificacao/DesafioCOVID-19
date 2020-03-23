import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack';
import {Entypo, SimpleLineIcons, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import Main from './pages/Main';
import Maps from './pages/Maps';
import Exit from './pages/Exit';
import Challenge from './pages/challenge';
import Progress from './pages/Progress';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = () => (
   <NavigationContainer>
      <StatusBar barStyle="dark-content"/>
      <Tab.Navigator
        activeColor="#005BAB"
        barStyle={{backgroundColor: '#fff'}}
        labeled={false}
      >
        <Tab.Screen name="Covid" component={Maps}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map-marker-outline" size={24} color={color}/>
            )
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Challenger"
          component={ChallengeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="fire" size={24} color={color}/>
            )
          }}
        ></Tab.Screen>
        <Tab.Screen name="Chat" component={Main}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="chat-bubble-outline" size={24} color={color}/>
            )
          }}
        />
        <Tab.Screen name="Progress" component={Progress}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="area-graph" size={24} color={color}/>
            )}}
        />
        <Tab.Screen name="Account" component={Main}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle-o" size={24} color={color}/>
            )
          }}
        />
      </Tab.Navigator>
   </NavigationContainer>
);


const ChallengeStack = () => (
  <Stack.Navigator screenOptions={{
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#fff",
      elevation: 0,
    },
    headerTitleStyle: {
      fontSize: 32,
      fontFamily: "Roboto",
      fontWeight: "bold"
    }
  }}>
    <Stack.Screen name="Desafios e Pontuações" component={Challenge}></Stack.Screen>
  </Stack.Navigator>
);

export default Routes;
