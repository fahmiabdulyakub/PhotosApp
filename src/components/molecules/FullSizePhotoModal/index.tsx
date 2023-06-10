import React, {memo} from 'react';
import {Modal, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {FullSizePhotoModalProps} from './types';

const FullSizePhotoModal = ({
  selectedPhoto,
  onCloseModal,
}: FullSizePhotoModalProps) => {
  return selectedPhoto ? (
    <Modal
      visible={!!selectedPhoto}
      transparent={true}
      onRequestClose={onCloseModal}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPress={onCloseModal}>
        <Image
          source={{uri: selectedPhoto.urls.regular}}
          style={styles.fullSizeImage}
        />
      </TouchableOpacity>
    </Modal>
  ) : null;
};

export default memo(FullSizePhotoModal);
