import React,{Component, useState} from 'react';
import {Animated, Image, Text} from 'react-native';
import styles from './styles';
import axios from 'axios';

function imageSize(peopleInfected){
    const num = Math.floor(peopleInfected/5000);
    return (num*3) + 80;
}

class ImageLoader extends Component{
    state = {
        opacity: new Animated.Value(0),
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }

    render(){
        return(
            <Animated.Image
                onLoad = {this.onLoad}
                {...this.props}
                style={[
                    {
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.5, 1],
                                })
                            }
                        ]
                    },
                    this.props.style,
                ]}
            />
        )
    }
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
    return(
        <>
            <Text style={styles.virusTitle}>{title}</Text>
            <ImageLoader
                style={styles.image, {width:size, height:size}}
                source={imagem}/>
            <Text style={styles.infoInfected}>Número de pessoas infectadas: {peopleInfected}</Text>
        </>
    );
};

export default ImageProgression;

