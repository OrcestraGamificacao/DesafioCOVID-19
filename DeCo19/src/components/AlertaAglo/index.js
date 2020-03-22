import React, { Component } from 'react';
import {View, TouchableOpacity, StyleSheet, Text, TextInput, Button, Alert, AsyncStorage} from 'react-native';
import styles from './style';
import { TouchableHighlight } from 'react-native-gesture-handler';

class AlertaAglo extends Component {
    state = {
        'bairro': '',
        'rua': '',
        'municipio': '',
    }


    render(){
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
                    onChangeText = { (text) => this._addLocal}/>
                </View>
                <View style = {{
                flex: 1,
                justifyContent: 'space-evenly',}}>
                <TextInput style={styles.writeBox}
                    multiline = {true}
                    placeholder = "Rua"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this._addLocal}/>
                </View>
                <View style = {{
                flex: 1,
                justifyContent: 'space-evenly',}}>
                <TextInput style={styles.writeBox}
                    multiline = {true}
                    placeholder = "Município"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this._addLocal}/>
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
                        onPress={console.log('Apertado1')}
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
                        onPress={console.log('Apertado2')}
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
                        onPress={console.log('Apertado3')}
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
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                    () => this.state.setBairro, this.state.setRua,  this.state.setMunicipio
                }>
                    <Text style = {styles.buttonText}> Submeter </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AlertaAglo;