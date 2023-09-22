import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
  },

  text: {
    paddingBottom: 12,
    fontSize: 18,
    textAlign: 'justify',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  month: {
    width: 80,
  },

  line: {
    marginTop: 4,
    marginBottom: 4,
    height: 24,
    justifyContent: 'center',
  },

  value: {
    textAlign: 'right',
    marginRight: 8,
    color: 'white',
    fontWeight: 'bold',
  },
});
