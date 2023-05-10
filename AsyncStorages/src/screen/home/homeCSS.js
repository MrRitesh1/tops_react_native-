import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  shado: {
    // shadowColor: '#2B1B17',
    // elevation: 20,
  },
  main: {
    flex: 1,
    backgroundColor: '#99ff99',
  },
  mainTopBar: {
    height: 80,
    padding: 10,
    backgroundColor: '#99ff99',
  },
  mainTopBarBody: {
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
  TopBarText: {
    marginTop: 10,
    fontWeight: '800',
    fontSize: 23,
  },
  contenBody: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // borderRadius: 50,
  },
  story: {
    padding: 5,
    marginTop: 20,
    width: 100,
    // backgroundColor: 'red',
  },
});
