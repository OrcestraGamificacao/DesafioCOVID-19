import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems:"center",
    paddingVertical:"10%"
  },
  player1:{
    backgroundColor:"#005BAB",
    borderRadius:5,
    flexDirection:"row",
    width:320,
    height:"12%",
    alignItems:"center",
    paddingHorizontal:"4%",
    marginBottom:10
  },
  player2:{
    backgroundColor:"#0072d6",
    borderRadius:5,
    flexDirection:"row",
    width:320,
    height:"12%",
    alignItems:"center",
    paddingHorizontal:"4%",
    marginBottom:10
  },
  player3:{
    backgroundColor:"#38a2ff",
    borderRadius:5,
    flexDirection:"row",
    width:320,
    height:"12%",
    alignItems:"center",
    paddingHorizontal:"4%",
    marginBottom:10
  },
  player4:{
    backgroundColor:"#99cfff",
    borderRadius:5,
    flexDirection:"row",
    width:320,
    height:"12%",
    alignItems:"center",
    paddingHorizontal:"4%",
    marginBottom:10
  },
  scroll:{
      flexGrow:1
  },
  number_dark:{
    fontSize:23,
    color:"#fff"
  },
  number_light:{
    fontSize:23,
    color:"#000000"
  },
  icon:{
    color:"#fff"
  },
  icon_light:{
    color:"#000000"
  },
  iconView:{
    paddingLeft:"3%"
  },
  leftSide:{
    paddingLeft:"3%",
    flexDirection:"row",
    alignItems:"center"
  },
  iconLeft:{
    paddingLeft:"4%",
    color:"#fecb01"
  },
  player_name_dark:{
    color:"#fff",
    paddingLeft:"5%"
  },
  player_name_light:{
    color:"#000000",
    paddingLeft:"5%"
  },
  player_name_view:{
      width:"50%",
  },

})

export default styles;
