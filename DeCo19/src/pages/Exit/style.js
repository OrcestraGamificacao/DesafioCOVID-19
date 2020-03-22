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
    Text: {
        fontFamily: "Roboto",
        fontSize: 18,
        top: normalize(40),
    },
    ArrowImg: {
        top: normalize(0),
        left: normalize(-5),
    },
    testeView: {
        top: normalize(30),
        borderStyle: "solid",
        height: normalize(70),
        width: normalize(200),
        borderRadius: 10,
    },  
    buttonContainer: {
        height: normalize(50),
        width:normalize(335),
        left: normalize(5),
        top: normalize(350),
        backgroundColor: "#005BAB",
        borderRadius: normalize(5)
    },
    textButton: {
        fontFamily: "Roboto",
        fontSize: 16,
        color:"white",
        textAlign: "center",
        marginTop: normalize(13),
    }
});

export default styles;