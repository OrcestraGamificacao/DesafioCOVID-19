import React from 'react';
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

function InfoIcon({onPress}) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.iconWrapper}>
                <Icon name="info" size={16} style={styles.icon}/>
            </View>
        </TouchableOpacity>
    )
}

export default InfoIcon;