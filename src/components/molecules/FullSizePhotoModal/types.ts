import {IPhoto} from '@types';

export interface FullSizePhotoModalProps {
  selectedPhoto: IPhoto | null;
  onCloseModal: () => void;
}
