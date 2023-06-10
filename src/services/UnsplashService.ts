import {IPhoto} from '@types';
import axios from 'axios';
import Config from 'react-native-config';

export const searchPhotos = (query: string, page: number) => {
  return new Promise<IPhoto[]>(resolve => {
    axios
      .get(`${Config.BASE_URL}search/photos`, {
        params: {
          query,
          client_id: Config.API_KEY,
          page,
          per_page: 10,
        },
      })
      .then(result => {
        resolve(result.data.results);
      })
      .catch(error => {
        resolve([]);
        console.log(error);
      });
  });
};
