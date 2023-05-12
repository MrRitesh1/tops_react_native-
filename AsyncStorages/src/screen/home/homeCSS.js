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
