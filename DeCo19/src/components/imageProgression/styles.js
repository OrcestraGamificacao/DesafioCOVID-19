import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
   virusTitle: {
      alignSelf: 'flex-start',
      fontSize: 16,
      paddingTop: '10%',
      paddingBottom: '5%',
      fontWeight: 'bold',
      width: '100%',
   },

   infoInfected: {
      alignSelf: 'flex-end',
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