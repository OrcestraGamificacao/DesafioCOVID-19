import React,{useState} from 'react';
import {Image, Text} from 'react-native';
import styles from './styles';
import axios from 'axios';

function imageSize(peopleInfected){
    const num = Math.floor(peopleInfected/5000);
    return (num*3) + 80;
}

const ImageProgression = props =>
{
    const imagem = props.imagem;
    const title = props.title;
    const axios = require('axios');
    let [peopleInfected, changelnfo] = useState("");
    if(title == 'Brasil'){
    axios.get('https://covid19.mathdro.id/api/countries/brazil')
        .then(function (response) {
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
    const size = imageSize(peopleInfected);
    console.log(title + " " + size);
    return(
        <>
            <Text style={styles.virusTitle}>{title}</Text>
            <Image
                style={styles.image, {width:size, height:size}}
                source={imagem}/>
            <Text style={styles.infoInfected}>cerca de {peopleInfected} infectados</Text>   
        </>
    );
};

export default ImageProgression;

