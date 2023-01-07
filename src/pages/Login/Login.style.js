import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#64b5f6',
  },
  logo: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    tintColor: 'white',
    alignSelf: 'center',
  },
  logo_container: {},
  body_container: {
    flex:10,
  },
  bottom_container: {
    flex: 1,
    alignSelf: 'center',
  },
  signup:{
    color:"white",
    fontWeight:"bold",
  },
});
