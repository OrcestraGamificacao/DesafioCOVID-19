import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

function Graph(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Progressão do coronavírus</Text>
            <Text style={styles.virusTitle}>Mundial</Text>
            <Image
            style={styles.image}
            source={require('../../../assets/virus1.png')}/>
            <Text style={styles.infoInfected}>cerca de 200 mil infectados</Text>
            <Text style={styles.virusTitle}>Brasil</Text>
            <Image
            style={styles.image}
            source={require('../../../assets/virus2.png')}/>
            <Text style={styles.infoInfected}>cerca de mil infectados</Text>
        </View>
    )
}

export default Graph;