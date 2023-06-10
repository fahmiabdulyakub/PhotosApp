import React, {memo} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Colors} from '@themes';
import styles from './styles';
import {PropsType} from './types';

const FooterPagination = ({isLoading}: PropsType) => {
  return (
    <View style={styles.footer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.blue} />
      ) : (
        <Text style={styles.text}>All data is displayed</Text>
      )}
    </View>
  );
};

export default memo(FooterPagination);
