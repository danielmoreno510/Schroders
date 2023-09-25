import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from '../../utils/responsiveUtils';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: widthPercentageToDP('5%'),
    backgroundColor: 'white',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  spinner: {
    marginTop: 32,
  },

  button: {
    marginTop: 40,
    marginBottom: 40,
  },

  yearContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },

  year: {
    marginRight: 12,
    flex: 1,
  },
});
