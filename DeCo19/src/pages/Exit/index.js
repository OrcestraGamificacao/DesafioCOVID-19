import React from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';
import arrow from '../../assets/Arrow.png';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';


function Main({ navigation }) {

    let data = [{
        value: 'Farmácia',
    }, {
        value: "Mercado",
    }, {
        value: "Hospital",
    }];


    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.ArrowImg} activeOpacity={0.5} >
                <Image
                    source={arrow}
                />
            </TouchableOpacity>

            <Text style={styles.TextTitle}>Aviso de Saída</Text>
            <Text style={styles.Text} >Destino</Text>

            <View style={styles.testeView} >
                <Dropdown
                    baseColor="grey"
                    dropdownMargins={{ min: 8, max: 400 }}
                    label="Atividade"
                    data={data}
                />
            </View>
            
            <View style={styles.buttonContainer} >
                <TouchableOpacity >
                    <Text style={styles.textButton}>Submeter</Text>
                </TouchableOpacity>                
            </View>
        </View>
    );
}

export default Main;