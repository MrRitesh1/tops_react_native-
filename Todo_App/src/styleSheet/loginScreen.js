import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  man: {
    flex: 1,
    // margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 150,
  },
  modalView: {
    flex: 1,
    // height: '50%',
    // margin: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#ff8080',
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 30,
    marginBottom: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
  loginImage: {
    width: 380,
    height: 300,
  },
  contenBody: {
    flex: 1,
    // backgroundColor: '#DCB4F3',
    padding: 20,
    // paddingTop: 30,
    borderRadius: 20,
    justifyContent: 'center',
  },
  shado: {
    shadowColor: '#2B1B17',
    elevation: 8,
  },
  inputContnenar: {
    backgroundColor: '#fff',
    height: 70,
    marginBottom: 10,

    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 10,
  },
  inputText: {
    height: 40,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 17,
    paddingLeft: 10,
  },
  buttonBody: {
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ff8080',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 150,
    borderRadius: 10,
    marginLeft: 10,
  },
  textBody: {
    alignItems: 'center',
    marginTop: 30,
  },
  singUpBody: {
    justifyContent: 'center',
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 40,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  singUpImage: {
    height: 50,
    width: 50,
    borderColor: '#000',
  },
  error: {
    color: 'red',
    textAlign: 'right',
    marginRight: 15,
  },
});
