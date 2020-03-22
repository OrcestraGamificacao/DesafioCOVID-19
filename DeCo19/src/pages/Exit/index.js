import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import arrow from '../../assets/Arrow.png';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';


function Main({ navigation }) {

    let [destino, changeDestino] = useState(''); // Para pegar o dados do form, utilizar a váriavel destino.

    let [dataDestino, changeDataDestino] = useState([{
        value: 'Farmácia',
    }, {
        value: "Mercado",
    }, {
        value: "Hospital",
    }]
    );

    const showAlert = () => {
        Alert.alert(destino);
    }

    return (
        <View style={styles.container} >
            <View style={styles.viewArrow} >
                <TouchableOpacity onPress={() => navigation.jumpTo("Covid")} activeOpacity={0.5} >
                    <Image
                        source={arrow}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.TextTitle}>Aviso de Saída</Text>
            <Text style={styles.subTitleDestino} >Destino</Text>

            <View style={styles.viewAtividades} >
                <Dropdown
                    dropdownPosition={-3.5}
                    onChangeText={(value) => changeDestino(value)}
                    label="Atividade"
                    data={dataDestino}
                />
            </View>

            <View style={styles.buttonContainer} >
                <TouchableOpacity onPress={showAlert}>
                    <Text style={styles.textButton}>Submeter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Main;