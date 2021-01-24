import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f2f7',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  subcontainer: {
    alignItems: 'center',
    width: '70%',
    height: Dimensions.get('window').height / 2,
    backgroundColor: '#e6f6f7',
    borderRadius: 20,
    elevation: 6,
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  shadoweffect: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  title: {
    marginTop: 15,
    margin: 20,
    fontSize: 20,
    textShadowColor: '#237c82',
    elevation: 6,
    color: '#237c82',
  },
  inputfield: {
    marginBottom: 20,
    fontSize: 16,
    height: 50,
    width: '90%',
    borderColor: '#237c82',
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 10,
    width: '90%',
    borderRadius: 5,
  },
});

export default styles;
