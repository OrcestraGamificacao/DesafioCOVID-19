import React, { Component } from 'react';
import {View, TouchableOpacity, StyleSheet, Text, TextInput, Button, Alert} from 'react-native';
import styles from './style';

class AlertaAglo extends Component {
    state = {
        bairro: '',
        rua: '',
        municipio: '',
    }
    handlebairro = (text) =>{
        this.setState({ bairro: text })
    }
    handlerua = (text) =>{
        this.setState({ rua: text })
    }
    handlemunicipio = (text) =>{
        this.setState({ municipio: text })
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.alertaTitle}>Local</Text>
                <TextInput style={styles.writeBox}
                    multiline = {true}
                    placeholder = "Bairro"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText = {this.handlebairro}/>
                <TextInput style={styles.writeBox}
                    multiline = {true}
                    placeholder = "Rua"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText = {this.handlerua}/>
                <TextInput style={styles.writeBox}
                    multiline = {true}
                    placeholder = "Município"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText = {this.handlemunicipio}/>

                <Text style={styles.alertaTitle}>Severidade</Text>
                <TouchableOpacity
                    style = {styles.buttonBox}
                    onPress = {
                    () => console.log('Apertado')
                    }>
                    <Text style = {styles.buttonText}> Alta </Text>
                </TouchableOpacity>

                
                
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                    () => this.login(this.state.bairro, this.state.rua. this.state.municipio)
                    }>
                    <Text style = {styles.buttonText}> Submeter </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AlertaAglo;