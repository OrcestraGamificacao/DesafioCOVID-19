
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';
import AlertaAglo from '../../components/AlertaAgro'

function Alerta(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Alerta de{"\n"}aglomeração</Text>
            <AlertaAglo />
        </View>
    )
}

export default Alerta;