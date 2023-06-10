import {IPhoto} from '@types';

export interface PhotoItemProps {
  photo: IPhoto;
  onPress: (photo: IPhoto) => void;
}
