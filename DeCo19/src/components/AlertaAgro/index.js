import React, { Component } from 'react';
import {View, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';
import styles from './style';

class AlertaAgro extends Component {
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
                    underlineColorAndroid = "transparent"
                    placeholder = "Bairro"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText = {this.handlebairro}/>
                <TextInput style={styles.writeBox}
                    underlineColorAndroid = "transparent"
                    placeholder = "Rua"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText = {this.handlerua}/>
                <TextInput style={styles.writeBox}
                    underlineColorAndroid = "transparent"
                    placeholder = "Município"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText = {this.handlemunicipio}/>
            </View>
        )
    }
}

export default AlertaAgro;