import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      paddingLeft: '5%',
   },

   title: {
      fontWeight: 'bold',
      paddingTop: '10%',
      fontSize: 29
   },

   virusTitle: {
      fontSize: 16,
      paddingTop: '10%',
   },

   infoInfected: {
      fontSize: 16,
      fontStyle: 'italic',
      textAlign: 'right',
      paddingRight: '2%',
   },

   image: {
      alignSelf: 'center',
   }
});

export default styles;