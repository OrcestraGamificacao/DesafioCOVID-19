import React from 'react';
import {Image, Text} from 'react-native';
import styles from './styles';

const ImageProgression = props =>
{
    const image = props.image;
    const title = props.title;
    const info = props.info;

    return(
        <>
            <Text style={styles.virusTitle}>{title}</Text>
            {/* <Image
                style={styles.image}
                source={require({image})}/> */}
            <Text style={styles.infoInfected}>{info}</Text>   
        </>
    );
};

export default ImageProgression;

