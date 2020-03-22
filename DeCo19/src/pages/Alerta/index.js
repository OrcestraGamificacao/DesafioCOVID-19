
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';
import AlertaAgro from '../../components/AlertaAgro'

function Alerta(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Alerta de{"\n"}aglomeração</Text>
            <AlertaAgro
            title={'Local'}
            escrever={"cerca de 200 mil infectados"}/>
            <Text style={styles.virusTitle}>Brasil</Text>
            <Text style={styles.infoInfected}>cerca de mil infectados</Text>
        </View>
    )
}

export default Alerta;