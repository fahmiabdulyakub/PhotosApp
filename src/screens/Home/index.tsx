import {View, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import styles from './styles';
import useHome from './hooks/useHome';
import {FooterPagination, Input} from '@components/atoms';
import {FullSizePhotoModal, PhotoItem} from '@components/molecules';
import {IPhotoItem} from './types';

const Home = () => {
  const {
    photos,
    searchQuery,
    selectedPhoto,
    isLoading,
    isRefresh,
    onSearch,
    onPhotoPress,
    onLoadMore,
    onCloseModal,
    handleRefresh,
  } = useHome();

  const renderItem = ({item, index}: IPhotoItem) => {
    return <PhotoItem key={index} photo={item} onPress={onPhotoPress} />;
  };
  return (
    <View style={styles.container}>
      <Input
        value={searchQuery}
        onChangeText={onSearch}
        placeholder="Search photos..."
      />
      <FlatList
        data={photos}
        renderItem={renderItem}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={<FooterPagination isLoading={isLoading} />}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={handleRefresh} />
        }
      />
      <FullSizePhotoModal
        selectedPhoto={selectedPhoto}
        onCloseModal={onCloseModal}
      />
    </View>
  );
};

export default Home;
