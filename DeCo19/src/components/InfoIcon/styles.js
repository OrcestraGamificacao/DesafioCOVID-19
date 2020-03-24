import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        display: 'flex',
        height: 32,
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        top: 100,
        width: 32,
        zIndex: 2,
    },
    iconWrapper: {
        borderRadius: 12,
        borderWidth: 1,
        display: 'flex',
        height: 24,
        justifyContent: 'center',
        marginLeft: 4,
        width: 24,
    },
    icon: {
        textAlign: 'center'
    },
});

export default styles;