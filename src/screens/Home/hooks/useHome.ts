/* eslint-disable react-hooks/exhaustive-deps */
import {searchPhotos} from '@services/UnsplashService';
import {IPhoto} from '@types';
import {useCallback, useEffect, useState} from 'react';
import debounce from 'lodash/debounce';

const useHome = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<IPhoto | null>(null);
  const [isAllFetched, setIsAllFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const onSearch = useCallback((query: string) => {
    setSearchQuery(query);
    debounceSearch(query);
  }, []);

  const handleSearch = (query: string) => {
    setPage(1);
    setPhotos([]);
    fetchPhotos(query, 1);
  };

  const debounceSearch = useCallback(
    debounce((query: string) => {
      handleSearch(query);
    }, 500),
    [],
  );

  const onPhotoPress = useCallback((photo: IPhoto) => {
    setSelectedPhoto(photo);
  }, []);

  const onCloseModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const onLoadMore = () => {
    if (!isLoading && !isAllFetched) {
      const nextPage = page + 1;
      fetchPhotos(searchQuery, nextPage);
      setPage(nextPage);
    }
  };

  useEffect(() => {
    fetchPhotos(searchQuery, 1);
  }, []);

  const fetchPhotos = (query: string, pageNumber: number) => {
    setIsLoading(true);
    searchPhotos(query, pageNumber)
      .then(response => {
        setPhotos(prevPhotos => [...prevPhotos, ...response]);
        if (response.length === 0) {
          setIsAllFetched(true);
        }
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    photos,
    searchQuery,
    selectedPhoto,
    isLoading,
    onPhotoPress,
    onCloseModal,
    onLoadMore,
    setSearchQuery,
    onSearch,
  };
};

export default useHome;
