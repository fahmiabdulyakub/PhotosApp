import {StyleSheet} from 'react-native';
import {hp} from '@utils/StyleUtil';
import {Colors} from '@themes';

const styles = StyleSheet.create({
  footer: {
    marginVertical: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: hp(1.6),
    color: Colors.black,
  },
});

export default styles;
