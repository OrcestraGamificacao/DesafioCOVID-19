import React from 'react';

import { View } from 'react-native';
import styles from './style';

import AlertaScreen from '../../components/Alerta';


const Main = () => (
  <View style={styles.container}>
    <AlertaScreen />
  </View>
);

Main.navigationOptions = {
  header: null,
};

export default Main;