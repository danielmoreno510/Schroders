import {StyleSheet} from 'react-native';

import {primaryColor} from '../../../constants';

export default StyleSheet.create({
  commit: {
    borderBottomColor: primaryColor,
    borderBottomWidth: 1,
    alignContent: 'center',
    padding: 0,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    flexDirection: 'column',
    paddingTop: 8,
  },
  button: {
    margin: 12,
    marginHorizontal: 0,
    width: 100,
    backgroundColor: primaryColor,
    padding: 6,
    borderRadius: 8,
  },
  textButton: {
    color: 'white',
  },
});
