import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#ccffcc',
  },
  min: {
    flex: 1,
    backgroundColor: '#ccffcc',
    // backgroundColor: '#fff',
    height: '40%',
    width: '90%',
    // justifyContent: 'center',
    margin: '3%',
    borderRadius: 20,
    padding: 10,
    // borderWidth: 0.5,
    // borderColor: '#00ff55',
  },
  shado: {
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  textView: {
    backgroundColor: '#ccffcc',
    height: 40,
    margin: 10,
    borderRadius: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  infoBody: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  profilesBody: {
    marginLeft: 240,
    marginRight: 10,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: 70,
    justifyContent: 'center',
  },
  profilesImage: {
    height: 60,
    width: 60,
    backgroundColor: '#C0C0C0',
    borderRadius: 100,
    padding: 4,
  },
  text: {
    fontSize: 15,
  },
  textImput: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRadius: 10,
    fontSize: 20,
  },
  buttons: {
    marginTop: 10,
    backgroundColor: '#99ff99',
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  buttonsText: {
    color: '#1a0900',
    fontSize: 20,
    padding: 5,
    fontWeight: '800',
    textAlign: 'center',
  },
});
