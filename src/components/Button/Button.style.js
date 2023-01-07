import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding:8,
    margin:10,
    borderRadius:7,
    alignItems:"center",
    backgroundColor:"#2286c3"
  },
  title:{
    fontWeight:"bold",
    fontSize:17,
    color:"white",
  },

});
