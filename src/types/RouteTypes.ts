import {PhotoType} from './PhotosType';

export type TabsParamList = {
  Inicio: undefined;
  Camera: undefined;
  Favoritos: undefined;
  PhotoDetails: {photo: PhotoType};
};
