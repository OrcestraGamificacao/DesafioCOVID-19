import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Animated,
    PanResponder,
    SafeAreaView,
    ScrollView
} from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import Icon from "react-native-vector-icons/Ionicons";
const Users = [
    { id: "1", uri: require("../../assets/1.jpg") },
    { id: "2", uri: require("../../assets/2.jpg") },
    { id: "3", uri: require("../../assets/3.jpg") },
    { id: "4", uri: require("../../assets/4.jpg") },
    { id: "5", uri: require("../../assets/5.jpg") }
];

export default class CardSwiper extends React.Component {
    constructor() {
        super();

        this.position = new Animated.ValueXY();
        this.state = {
            currentIndex: 0
        };

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ["-30deg", "0deg", "10deg"],
            extrapolate: "clamp"
        });

        this.rotateAndTranslate = {
            transform: [
                {
                    rotate: this.rotate
                },
                ...this.position.getTranslateTransform()
            ]
        };

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: "clamp"
        });
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: "clamp"
        });

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: "clamp"
        });
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: "clamp"
        });
    }
    componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 });
                        });
                    });
                } else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 });
                        });
                    });
                } else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4
                    }).start();
                }
            }
        });
    }

    renderUsers = () => {
        return Users.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null;
            } else if (i == this.state.currentIndex) {
                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id}
                        style={[
                            this.rotateAndTranslate,
                            {
                                height: SCREEN_HEIGHT - 120,
                                width: SCREEN_WIDTH,
                                paddingLeft: 10,
                                paddingRight: 10,
                                position: "absolute"
                            }
                        ]}
                    >
                        <Animated.View
                            style={{
                                opacity: this.likeOpacity,
                                transform: [{ rotate: "-30deg" }],
                                position: "absolute",
                                top: 50,
                                left: 40,
                                zIndex: 1000
                            }}
                        >
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: "green",
                                    color: "green",
                                    fontSize: 32,
                                    fontWeight: "800",
                                    padding: 10
                                }}
                            >
                                LIKE
              </Text>
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity: this.dislikeOpacity,
                                transform: [{ rotate: "30deg" }],
                                position: "absolute",
                                top: 50,
                                right: 40,
                                zIndex: 1000
                            }}
                        >
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: "red",
                                    color: "red",
                                    fontSize: 32,
                                    fontWeight: "800",
                                    padding: 10
                                }}
                            >
                                NOPE
              </Text>
                        </Animated.View>
                        <View style={styles.card}>
                            <Text style={styles.cardHeader}>Desafio Comunidade</Text>
                            <Text style={styles.cardText}>
                                Essas medidas de proteção servem para que você possa se proteger
                                contra a contaminação do COVID-19. Marque a cada vez que
                                exercitar cada uma delas
              </Text>
                            <Text style={(styles.cardText, styles.cardTextList)}>
                                Pontuações:
                {"\n"}- Manhã (cumprimento): 10 pts;
                {"\n"}- Tarde (lembrete): 25 pts;
                {"\n"}- Noite (interação): 20 pts;
              </Text>
                            <View style={styles.challengerContainer}>
                                <View style={styles.challengerCard}>
                                    <Image
                                        style={styles.imageChallengerCard}
                                        source={require("../../assets/image13.png")}
                                    ></Image>
                                    <View style={styles.countChallengerContainer}>
                                        <RectButton>
                                            <MaterialCommunityIcons
                                                name="plus"
                                                size={38}
                                                color="#005BAB"
                                            ></MaterialCommunityIcons>
                                        </RectButton>
                                        <Text style={styles.countChallenger}>9</Text>
                                    </View>
                                </View>
                                <View style={styles.challengerCard}>
                                    <Image
                                        style={styles.imageChallengerCard}
                                        source={require("../../assets/image17.png")}
                                    ></Image>
                                    <View style={styles.countChallengerContainer}>
                                        <RectButton>
                                            <MaterialCommunityIcons
                                                name="plus"
                                                size={38}
                                                color="#005BAB"
                                            ></MaterialCommunityIcons>
                                        </RectButton>
                                        <Text style={styles.countChallenger}>9</Text>
                                    </View>
                                </View>
                                <View style={styles.challengerCard}>
                                    <Image
                                        style={styles.imageChallengerCard}
                                        source={require("../../assets/image19.png")}
                                    ></Image>
                                    <View style={styles.countChallengerContainer}>
                                        <RectButton>
                                            <MaterialCommunityIcons
                                                name="plus"
                                                size={38}
                                                color="#005BAB"
                                            ></MaterialCommunityIcons>
                                        </RectButton>
                                        <Text style={styles.countChallenger}>9</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                );
            } else {
                return (
                    <Animated.View
                        key={item.id}
                        style={[
                            {
                                opacity: this.nextCardOpacity,
                                transform: [{ scale: this.nextCardScale }],
                                height: SCREEN_HEIGHT - 120,
                                width: SCREEN_WIDTH,
                                padding: 10,
                                position: "absolute"
                            }
                        ]}
                    >
                        <Animated.View
                            style={{
                                opacity: 0,
                                transform: [{ rotate: "-30deg" }],
                                position: "absolute",
                                top: 50,
                                left: 40,
                                zIndex: 1000
                            }}
                        >
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: "green",
                                    color: "green",
                                    fontSize: 32,
                                    fontWeight: "800",
                                    padding: 10
                                }}
                            >
                                LIKE
              </Text>
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity: 0,
                                transform: [{ rotate: "30deg" }],
                                position: "absolute",
                                top: 50,
                                right: 40,
                                zIndex: 1000
                            }}
                        >
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: "red",
                                    color: "red",
                                    fontSize: 32,
                                    fontWeight: "800",
                                    padding: 10
                                }}
                            >
                                NOPE
              </Text>
                        </Animated.View>

                        <Image
                            style={{
                                flex: 1,
                                height: null,
                                width: null,
                                resizeMode: "cover",
                                borderRadius: 20
                            }}
                            source={item.uri}
                        />
                    </Animated.View>
                );
            }
        }).reverse();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 60 }}></View>
                <View style={{ flex: 1 }}>{this.renderUsers()}</View>
                <View style={{ height: 60 }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    card: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 8,
        height: responsiveHeight(81),
        width: responsiveWidth(92),
        borderRadius: 8,
        backgroundColor: "#94C041",
        padding: 21
    },
    cardHeader: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: "Roboto"
    },
    cardText: {
        color: "#fff",
        fontSize: 15,
        lineHeight: 25,
        fontFamily: "Roboto"
    },
    cardTextList: {
        marginTop: 20,
        fontWeight: "bold",
        color: "#fff",
        fontSize: 15,
        lineHeight: 30,
        fontFamily: "Roboto"
    },
    challengerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    challengerCard: {
        backgroundColor: "#FCEC91",
        height: responsiveHeight(25),
        width: responsiveWidth(25),
        marginTop: 25,
        borderRadius: 4,
        alignItems: "center",
        padding: 20,
        alignSelf: "flex-end"
    },
    imageChallengerCard: {
        width: 75,
        height: 75,
        resizeMode: "stretch"
    },
    countChallenger: {
        fontSize: 20,
        margin: 10
    },
    countChallengerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    }
});
