import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';
import {hp, wp} from '@utils/StyleUtil';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(7),
    borderRadius: 10,
    paddingHorizontal: wp(3),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  input: {
    fontSize: hp(1.8),
    fontFamily: Fonts.Inter,
    color: Colors.gray,
    width: wp(60),
    top: 1,
  },
});
