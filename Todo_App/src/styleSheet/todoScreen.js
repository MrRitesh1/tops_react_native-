import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  scrollView: {
    flex: 1,
  },

  hedarBody: {
    flex: 0.1,
    padding: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },

  nameText: {
    fontSize: 22,
    marginTop: 10,
    color: 'blue',
    fontWeight: '900',
  },
  addTodoicon: {
    height: 40,
    width: 40,
  },
  centeredTodoView: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 200,
    borderTopWidth: 5,
    borderTopColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTodoView: {
    padding: 10,
  },
  buttonAddBody: {
    // flex: 1,
    // justifyContent: 'flex-end',
    margin: 10,
    // width: 200,
    alignItems: 'center',
  },
  addButton: {
    width: 200,
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
  },
  contenBody: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  centeredView: {
    flex: 0.6,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 100,
  },
  modalView: {
    flex: 1,
    // height: '50%',
    // margin: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
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
  todoContenBody: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    width: '100%',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
  },
  buttonBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    marginLeft: 10,
    borderRadius: 10,
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
});
