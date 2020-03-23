import React, { Component, useState } from 'react';
import {View, TouchableOpacity, Text, TextInput, AsyncStorage} from 'react-native';
import styles from './style';
import { TouchableHighlight } from 'react-native-gesture-handler';

function AlertaAglo(){

    const [bairro, setBairro] = useState(" ");
    const [rua, setRua] = useState(" ");
    const [municipio, setMunicipio] = useState(" ");

    const handleSubmit = async() => {
        await AsyncStorage.setItem('bairro', bairro)
        const bairro1 = await AsyncStorage.getItem('bairro');
        console.log(bairro1);

        await AsyncStorage.setItem('rua', rua)
        const rua1 = await AsyncStorage.getItem('rua');
        console.log(rua1);

        await AsyncStorage.setItem('municipio', municipio)
        const municipio1 = await AsyncStorage.getItem('municipio');
        console.log(municipio1);
    }

    const handleClick = async(flag) => {
        if(flag == 1){
            this.setState({state:true})
        }
        console.log(flag);
    }
            return(
                <View style = {{
                    flex: 1,
                    justifyContent: 'space-evenly',}}>
                    <Text style={styles.alertaTitle}>Local</Text>

                    <View style = {{
                        flex: 1,
                        justifyContent: 'space-evenly',}}>
                    <TextInput style={styles.writeBox}
                        multiline = {true}
                        placeholder = "Bairro"
                        placeholderTextColor = "#000"
                        autoCapitalize = "none"
                        onChangeText = {(bairro) => setBairro(bairro)}
                        />
                    </View>
                    <View style = {{
                    flex: 1,
                    justifyContent: 'space-evenly',}}>
                    <TextInput style={styles.writeBox}
                        multiline = {true}
                        placeholder = "Rua"
                        placeholderTextColor = "#000"
                        autoCapitalize = "none"
                        onChangeText = {(rua) => setRua(rua)}
                        />
                    </View>
                    <View style = {{
                    flex: 1,
                    justifyContent: 'space-evenly',}}>
                    <TextInput style={styles.writeBox}
                        multiline = {true}
                        placeholder = "Município"
                        placeholderTextColor = "#000"
                        autoCapitalize = "none"
                        onChangeText = {(municipio) => setMunicipio(municipio)}
                        />
                    </View>
                    <Text style={styles.alertaTitle}>Severidade</Text>

                    <View style = {{
                    flex: 1,
                    justifyContent: 'space-evenly',}}>
                        <TouchableHighlight
                            style={{
                                flex: 1,
                                padding: 15,
                                justifyContent: 'flex-end',
                                margin: 15,
                                height: 50,
                                width: 80,
                                backgroundColor: '#ff0000',
                                borderRadius: 3,
                            }}
                            onPress={() => handleClick("clicadoAlta")}
                            >
                                <Text style ={{
                                    fontSize: 14,
                                    flex: 1,
                                    padding: 5,
                                    textAlign: 'center',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: 'bold',}}>Alta</Text>
                        </TouchableHighlight>
                    </View>
                    <View style = {{
                        flex: 1,
                        justifyContent: 'space-evenly',}}>
                        <TouchableHighlight
                            style={{
                                flex: 1,
                                padding: 15,
                                justifyContent: 'flex-end',
                                margin: 15,
                                height: 40,
                                width: 80,
                                backgroundColor: '#EAD40D',
                                borderRadius: 3,
                            }}
                            onPress={() => handleClick("clicadoMedia")}
                            >
                            <Text style ={{
                                fontSize: 14,
                                flex: 1,
                                padding: 5,
                                textAlign: 'center',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',}}>Média</Text>
                        </TouchableHighlight>
                    </View>
                    <View style = {{
                        flex: 1,
                        justifyContent: 'space-evenly',}}>
                        <TouchableHighlight
                            style={{
                                flex: 1,
                                padding: 15,
                                justifyContent: 'flex-end',
                                margin: 15,
                                height: 40,
                                width: 80,
                                backgroundColor: '#34A100',
                                borderRadius: 3,
                            }}
                            onPress={() => handleClick("clicadoBaixa")}
                            >
                            <Text style ={{
                                fontSize: 14,
                                flex: 1,
                                padding: 5,
                                textAlign: 'center',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',}}>Baixa</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {() => handleSubmit()}
                            >
                            <Text style = {styles.buttonText}> Submeter </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
}

export default AlertaAglo;