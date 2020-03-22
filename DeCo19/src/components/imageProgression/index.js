import React,{useState} from 'react';
import {Image, Text} from 'react-native';
import styles from './styles';
import axios from 'axios';

const ImageProgression = props =>
{
    const imagem = props.imagem;
    const title = props.title;
    const axios = require('axios');
    let [peopleInfected, changelnfo] = useState("");
    if(title == 'Brasil'){
    axios.get('https://covid19.mathdro.id/api/countries/brazil')
        .then(function (response) {
            console.log(response.data["confirmed"]["value"]);
            changelnfo(response.data["confirmed"]["value"]);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
    }
    else{
        axios.get('https://covid19.mathdro.id/api/')
        .then(function (response) {
            changelnfo(response.data["confirmed"]["value"]);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
    
    }
    return(
        <>
            <Text style={styles.virusTitle}>{title}</Text>
            <Image
                style={styles.image}
                source={imagem}/>
            <Text style={styles.infoInfected}>cerca de {peopleInfected} infectados</Text>   
        </>
    );
};

export default ImageProgression;

