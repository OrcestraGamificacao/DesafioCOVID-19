
import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import { fonts } from '~/styles';

const styles = StyleSheet.create({
  orcHelmet: {
    width: normalize(150),
    height: normalize(170),
    left: normalize(110),
    top: normalize(50),
  },

  Text: {
    fontSize: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    top: normalize(60),
    left: normalize(48),
  },
  TextInput1: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 4,
    top: normalize(100, 'height'),
    left: normalize(35),
    borderRadius: normalize(2),
  },
  TextInput2: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 4,
    top: normalize(140, 'height'),
    left: normalize(35),
    borderRadius: normalize(2),
  },
  button: {
    width: normalize(300),
    borderColor: 'black',
    backgroundColor: 'black',
    borderWidth: 4,
    top: normalize(180, 'height'),
    left: normalize(35),
    borderRadius: normalize(2),
  },
});

export default styles;