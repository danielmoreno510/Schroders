import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 12,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 24,
    justifyContent: 'space-between'
  },

  text: {
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
