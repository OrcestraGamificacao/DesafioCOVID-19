import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


   alertaTitle: {
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      paddingTop: '10%',
      paddingLeft: '3%'
   },

   writeBox: {
      flex: 1,
      padding: 15,
      justifyContent: 'flex-end',
      margin: 15,
      height: 50,
      width: 327,
      borderColor: '#aeaeae',
      borderWidth: 1,
      borderRadius: 3,
   },

   buttonBox: {
      flex: 1,
      padding: 15,
      justifyContent: 'flex-end',
      margin: 15,
      height: 50,
      width: 80,
      backgroundColor: '#ff0000',
      borderRadius: 3,
   },

   submitButton: {
      backgroundColor: '#005BAB',
      padding: 10,
      margin: 15,
      width: 327,
      height: 60,
      borderRadius: 3,

   },
   buttonText:{
      fontSize: 16,
      flex: 1,
      padding: 10,
      justifyContent: 'flex',
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
   }
});

export default styles;