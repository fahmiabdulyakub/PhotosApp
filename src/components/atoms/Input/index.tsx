import {View, TextInput} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {ITextInputFieldProps} from './types';
import {Colors} from '@themes';

const Input = (props: ITextInputFieldProps) => {
  const {icon, ...baseProps} = props;
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.dark_grey}
        numberOfLines={5}
        {...baseProps}
      />
    </View>
  );
};

export default memo(Input);
