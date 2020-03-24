import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import ImageProgression from '../../components/imageProgression'
import InfoIcon from '../../components/InfoIcon';
import InfoModal from '../../components/InfoModal';

function Progress(){
    const [showModal, setShowModal] = useState(false);

    function changeShowModal() {
        setShowModal(!showModal);
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Progressão do coronavírus</Text>
            <InfoIcon onPress={changeShowModal} />
            { showModal && <InfoModal hideModal={changeShowModal} /> }
            <ImageProgression 
                title={'Mundial'}
                imagem={require('../../../assets/virus1.png')}
            />
            <ImageProgression 
                title={'Brasil'}
                imagem={require('../../../assets/virus2.png')}
            />
        </ScrollView>
    )
}

export default Progress;