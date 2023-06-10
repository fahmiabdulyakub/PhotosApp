import {Colors, Fonts} from '@themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: Colors.light_grey,
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 1,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.blue,
  },
  author: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: Fonts.Inter,
  },
});

export default styles;
