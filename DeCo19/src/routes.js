import React from "react";
import { StatusBar, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Entypo, SimpleLineIcons, MaterialCommunityIcons, MaterialIcons, FontAwesome, EvilIcons, AntDesign
} from "@expo/vector-icons";
import Main from "./pages/Main";
import Exit from './pages/Exit';
import Ranking from "./pages/challenge/Ranking";
import Maps from './pages/Maps';
import Progress from './pages/Progress';
//import Challenge from './pages/challenge';
import Swiper from "./components/Card/index";
import { RectButton } from "react-native-gesture-handler";

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
        <Tab.Screen name="Account" component={Exit}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="arrow-right" size={24} color={color}/>
            )
          }}
        />
      </Tab.Navigator>
   </NavigationContainer>
);

const ChallengeStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#fff",
        elevation: 0
      },
      headerTitleStyle: {
        fontSize: 32,
        fontFamily: "Roboto",
        fontWeight: "bold"
      }
    }}
  >
    <Stack.Screen
      name="Desafios e Pontuações"
      component={Swiper}
      options={{
        headerRight: () => (
          <View>
            <RectButton
              onPress={() => navigation.navigate("Ranking Comunitário")}
            >
              <EvilIcons name="star" size={33} />
            </RectButton>
          </View>
        )
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="Ranking Comunitário"
      component={Ranking}
      options={{
        headerRight: () => (
          <View style={{flexDirection:"row", paddingRight:10}}>
            <RectButton>
              <EvilIcons name="search" size={33} />
            </RectButton>
            <RectButton>
              <AntDesign name="filter" size={30}/>
            </RectButton>
          </View>
        )
      }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default Routes;
