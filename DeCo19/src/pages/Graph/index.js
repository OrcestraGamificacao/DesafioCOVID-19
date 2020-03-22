import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import ImageProgression from '../../components/imageProgression'

function Graph(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Progressão do coronavírus</Text>
            <ImageProgression 
            title={'Mundial'}
            image={'../../../assets/virus1.png'}
            info={"cerca de 200 mil infectados"}/>
            <Text style={styles.virusTitle}>Brasil</Text>
            <Image
            style={styles.image}
            source={require('../../../assets/virus2.png')}/>
            <Text style={styles.infoInfected}>cerca de mil infectados</Text>
        </View>
    )
}

export default Graph;