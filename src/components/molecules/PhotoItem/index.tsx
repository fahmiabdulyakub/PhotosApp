import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {PhotoItemProps} from './types';
import styles from './styles';

const PhotoItem = ({photo, onPress}: PhotoItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(photo)}>
      <Image source={{uri: photo.urls.regular}} style={styles.thumbnail} />
      <View style={styles.detailsContainer}>
        {photo.description && (
          <Text style={styles.title}>{photo.description}</Text>
        )}
        <Text style={styles.author}>{photo.user.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PhotoItem);
