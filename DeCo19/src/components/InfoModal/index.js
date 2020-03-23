import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, PanResponder, Animated, Dimensions, Text, Image } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('screen');
const position = new Animated.ValueXY({x: 0, y: height});
let newHideModal = () => {};
const initialPanResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => false,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
        position.setOffset({x: 0, y: height-400});
        position.setValue({x: 0, y: height-400});
    },
    onPanResponderMove: (evt, gestureState) => {
        position.setValue({ y: gestureState.dy, x: 0 });
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
        position.flattenOffset();
        if(gestureState.dy > 0) {
            Animated.spring(position, {
                toValue: {
                    x: 0,
                    y: height
                },
                bounciness: 5,
                speed: 10,
            }).start();

            setTimeout(() => {
                newHideModal();
            }, 500);
        } else {
            Animated.spring(position, {
                toValue: {
                    x: 0,
                    y: height-400
                },
                bounciness: 5,
                speed: 10,
            }).start();
        }
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      return true;
    },
});

function InfoModal({hideModal}) {
    const panResponder = useRef(initialPanResponder);
    newHideModal = hideModal;

    useEffect(() => {
        const timeout = setTimeout(() => {
            Animated.spring(position, {
                toValue: {
                    x: 0,
                    y: height-400
                },
                bounciness: 5,
                speed: 10,
            }).start();
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    });

    return(
        <Animated.View
            {...panResponder.current.panHandlers}
            style={[styles.container, position.getLayout()]}
        >
            <View style={styles.dragableContainer}>
                <View style={styles.dragableSignal} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Sua missão é evitar que o vírus do Brasil continue a crescer, para isso você deve conscientizar as outras pessoas a seguir as normas estabelecidas e ter os cuidados de higiêne recomendados. Você pode ser um dos protagonistas da luta contra o coronavírus.
                </Text>
                <Image
                    style={styles.image}
                    source={require('../../assets/info.png')} />
            </View>
        </Animated.View>
    )
}

export default InfoModal;