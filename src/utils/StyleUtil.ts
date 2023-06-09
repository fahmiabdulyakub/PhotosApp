import {Dimensions, PixelRatio} from 'react-native';
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

export const wp = (widthPercent: number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((Width * elemWidth) / 100);
};

export const hp = (heightPercent: number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((Height * elemHeight) / 100);
};
