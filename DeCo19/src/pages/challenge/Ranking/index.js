import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  Feather,
  AntDesign,
  FontAwesome,
  Entypo
} from "@expo/vector-icons";

import styles from "./styles";

function Ranking({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView style={styles.scroll} horizontal>
          <View>
            <View style={styles.player1}>
              <Text style={styles.number_dark}>1</Text>
              <View style={styles.iconView}>
                <Feather style={styles.icon} name="user" size={33} />
              </View>
              <View style={styles.player_name_view}>
                <Text style={styles.player_name_dark}>Player 1</Text>
              </View>
            <View style={styles.leftSide}>
                <Text style={styles.number_dark} >2500</Text>
                <Entypo  style={styles.iconLeft} name="medal" size={33} />
            </View>
            </View>
            <View style={styles.player2}>
              <Text style={styles.number_dark}>2</Text>
              <View style={styles.iconView}>
                <Feather style={styles.icon} name="user" size={33} />
              </View>
              <View style={styles.player_name_view}>
                <Text style={styles.player_name_dark}>Player 2</Text>
              </View>
            <View style={styles.leftSide}>
                <Text style={styles.number_dark} >1750</Text>
            </View>
            </View>
            <View style={styles.player3}>
              <Text style={styles.number_dark}>3</Text>
              <View style={styles.iconView}>
                <Feather style={styles.icon} name="user" size={33} />
              </View>
              <View style={styles.player_name_view}>
                <Text style={styles.player_name_dark}>Player 3</Text>
              </View>
            <View style={styles.leftSide}>
                <Text style={styles.number_dark} >1375</Text>
            </View>
            </View>
            <View style={styles.player4}>
            <Text style={styles.number_light}>4</Text>
              <View style={styles.iconView}>
                <Feather style={styles.icon_light} name="user" size={33} />
              </View>
              <View style={styles.player_name_view}>
                <Text style={styles.player_name_light}>Player 4</Text>
              </View>
            <View style={styles.leftSide}>
                <Text style={styles.number_light} >750</Text>
            </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Ranking;
