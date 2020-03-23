import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 1000,
        width: width,
        bottom: 0,
        zIndex: 5,
        backgroundColor: '#005BAB',
        borderRadius: 10,
    },
    dragableContainer: {
        width: width,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dragableSignal: {
        height: 6,
        width: 60,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    textContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        color: 'white',
        textAlign: 'justify',
        fontSize: 14,
    },
    image: {
        alignSelf: 'center',
    }
});

export default styles;