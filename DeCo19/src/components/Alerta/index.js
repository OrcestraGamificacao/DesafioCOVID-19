
/* eslint-disable react/jsx-indent */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image, ImageBackground, Text, TextInput, Button, View, Alert,
} from 'react-native';

import styles from './style';


const textos = {
  usuario: 'Usuário',
  senha: 'Senha',

};

const loginScreen = () => (

    <ImageBackground source={require('~/assets/images/BG.png')} style={{ width: '100%', height: '100%' }}>
        <ImageBackground source={require('~/assets/images/PATTERN.png')} style={{ width: '100%', height: '100%' }}>
            <Image source={require('~/assets/images/orc_capacete.png')} style={styles.orcHelmet} />
            <Text style={styles.Text}>PORTAL ORC</Text>
            <TextInput
              style={styles.TextInput1}
              placeholder={` ${textos.usuario}`}
            />
            <TextInput
              style={styles.TextInput2}
              placeholder={` ${textos.senha}`}
            />
            <View style={styles.button}>
                <Button
                  title="ENTRAR"
                  style={{ width: '100%', height: '100%' }}
                  color="black"
                  onPress={() => Alert.alert('Testando Botao')}
                />
            </View>
        </ImageBackground>
    </ImageBackground>
);


export default alertaScreen;