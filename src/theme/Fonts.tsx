import { Dimensions, PixelRatio, Platform, TextStyle } from "react-native";
import { fontSize } from "../helper/globalFunctions";

export function commonFontStyle(
  fontFamily: string,
  size: number,
  color: string
): TextStyle {
  return {
    fontFamily: fontFamily,
    // fontSize: fontSize(size),
    fontSize: size,
    color: color,
    includeFontPadding: false,
  };
}


export function getFontType(fontWeight: any) {
  if (fontWeight == 700) {
    return 'articulatCF-bold';
  } else if (fontWeight == 400) {
    return 'articulatCF-regular';
  } else if (fontWeight == 500) {
    return 'articulatCF-medium';
  } else if (fontWeight == 600) {
    return 'articulatCF-semibold';
  } else if (fontWeight == '700_o') {
    return 'oddval-bold';
  } else if (fontWeight == '600_o') {
    return 'oddval-semibold';
  } else if (fontWeight == '500_o') {
    return 'oddval-medium';
  } else if (fontWeight == '400_o') {
    return 'oddval-regular';
  } else if (fontWeight == '300_o') {
    return 'oddval-light';
  } else {
    return 'articulatCF-regular';
  }
}

export const defaultFont = (fontWeight: any, fontSize: any, color: any) => {
  return {
    fontFamily: getFontType(fontWeight),
    fontSize: actuatedNormalize(fontSize - 2),
    color: color,
    includeFontPadding: false,
  };
};
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
export function actuatedNormalize(size: any) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}