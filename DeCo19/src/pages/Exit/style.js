import {StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        top: normalize(45),
        left: normalize(20),
    },
    TextTitle: {
        fontFamily: "Roboto",
        fontSize: 26,
        top: normalize(10),
    },
    subTitleDestino: {
        fontFamily: "Roboto",
        fontSize: 18,
        top: normalize(40),
    },
    viewArrow: {
        top: normalize(10),
        left: normalize(-5),
        width: normalize(30),
    },
    viewAtividades: {
        top: normalize(30),
        width: normalize(200),
    },  
    buttonContainer: {
        height: normalize(50),
        width:normalize(335),
        left: normalize(5),
        top: normalize(345),
        backgroundColor: "#005BAB",
        borderRadius: normalize(5)
    },
    textButton: {
        fontFamily: "Roboto",
        fontSize: 16,
        color:"white",
        textAlign: "center",
        marginTop: normalize(13),
    },
    perguntaSair: {
        fontSize: 17,
        top: normalize(45),
    },
});

export default styles;