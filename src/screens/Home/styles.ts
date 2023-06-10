import {Colors} from '@themes';
import {hp, wp} from '@utils/StyleUtil';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: hp(3),
    paddingHorizontal: wp(3),
  },
  listContainer: {
    marginVertical: hp(3),
  },
});

export default styles;
