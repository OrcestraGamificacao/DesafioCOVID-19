import {
   StyleSheet,
   Platform
} from 'react-native';

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   header: {
      zIndex: 2,
      height: 100,
      paddingTop: Platform.OS === 'android' ? 20 : 0,
      justifyContent: 'center',
      backgroundColor: 'white',
   },
   title: {
      fontSize: 24,
      color: 'rgba(0, 0, 0, 0.8)'
   },
   map: {
      flex: 1,
   }
});

export default styles;