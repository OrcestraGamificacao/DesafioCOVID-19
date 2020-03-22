import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import ImageProgression from '../../components/imageProgression'

function Progress(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Progressão do coronavírus</Text>
            <ImageProgression 
            title={'Mundial'}
            imagem={require('../../../assets/virus1.png')}/>
            <ImageProgression 
            title={'Brasil'}
            imagem={require('../../../assets/virus2.png')}/>
        </View>
    )
}

export default Progress;