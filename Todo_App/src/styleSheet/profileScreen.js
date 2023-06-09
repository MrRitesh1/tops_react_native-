import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  shado: {
    shadowColor: '#2B1B17',
    elevation: 10,
  },
  scrollView: {
    flex: 1,
  },

  logoutButtonBody: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  ProfileBody: {
    flex: 1,
    flexDirection: 'row',
  },
  imageProfileBody: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  imageProfile: {
    height: 40,
    width: 40,
    // alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '900',
  },
  logoutButton: {
    backgroundColor: '#ff8080',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 100,
    borderRadius: 10,
  },
  logoutButtonText: {
    fontSize: 20,
    fontWeight: '900',
  },
});
