import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 360;
const fontScale = PixelRatio.getFontScale();

export function n(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    // if (Platform.isPad) {
    //   return Math.round(PixelRatio.roundToNearestPixel(newSize)) + 2;
    // }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function fn(size: number): number {
  return size / fontScale;
}
