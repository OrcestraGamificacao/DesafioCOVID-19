import React from 'react';
import { View , Text, ScrollView, SafeAreaView, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function challenge() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView horizontal>
          <View style={styles.card}>
            <Text style={styles.cardHeader}>
              Desafio Comunidade
            </Text>
            <Text style={styles.cardText}>
              Essas medidas de proteção servem para que você
              possa se proteger contra a contaminação do COVID-19.
              Marque a cada vez que exercitar cada uma delas
            </Text>
            <Text style={ styles.cardText, styles.cardTextList}>Pontuações:
                {"\n"}- Manhã (cumprimento): 10 pts;
                {"\n"}- Tarde (lembrete): 25 pts;
                {"\n"}- Noite (interação): 20 pts;
                </Text>
            <View style={styles.challengerContainer}>
              <View style={styles.challengerCard}>
                <Image style={styles.imageChallengerCard} source={require('../../assets/image13.png')}></Image>
                <View style={styles.countChallengerContainer}>
                  <RectButton><MaterialCommunityIcons name="plus" size={38} color="#005BAB"></MaterialCommunityIcons></RectButton>
                  <Text style={styles.countChallenger}>9</Text>
                </View>
              </View>
              <View style={styles.challengerCard}>
                <Image style={styles.imageChallengerCard} source={require('../../assets/image17.png')}></Image>
                <View style={styles.countChallengerContainer}>
                  <RectButton><MaterialCommunityIcons name="plus" size={38} color="#005BAB"></MaterialCommunityIcons></RectButton>
                  <Text style={styles.countChallenger}>9</Text>
                </View>
              </View>
              <View style={styles.challengerCard}>
                <Image style={styles.imageChallengerCard} source={require('../../assets/image19.png')}></Image>
                <View style={styles.countChallengerContainer}>
                  <RectButton><MaterialCommunityIcons name="plus" size={38} color="#005BAB"></MaterialCommunityIcons></RectButton>
                  <Text style={styles.countChallenger}>9</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
