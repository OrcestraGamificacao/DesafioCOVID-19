import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

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
    backgroundColor: '#94C041',
    padding: 21,
  },
  cardHeader: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: "Roboto"
  },
  cardText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 25,
    fontFamily: "Roboto"
  },
  cardTextList: {
    marginTop: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
    lineHeight: 30,
    fontFamily: "Roboto"
  },
  challengerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  challengerCard: {
    backgroundColor: '#FCEC91',
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
    marginTop: 10,
  }
})

export default styles;
