import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 10,
  },

  main: {
    flex: 1,
    backgroundColor: '#99ff99',
  },
  mainTopHeader: {
    height: 80,
    padding: 10,
    backgroundColor: '#99ff99',
  },
  mainTopHeaderBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  ProfileImage: {
    height: 50,
    width: 50,
    marginLeft: 20,
    marginRight: 10,

    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#000',
  },
  TopHeaderText: {
    marginTop: 10,
    fontWeight: '800',
    fontSize: 23,
  },
  contenBody: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  contenTab: {
    // flex: 1,
    height: 70,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // marginTop: 10,
    backgroundColor: '#ccffcc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
