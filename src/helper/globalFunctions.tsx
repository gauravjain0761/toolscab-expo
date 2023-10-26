import { Dimensions, PixelRatio, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import DeviceInfo from "react-native-device-info";
import { icons } from "../theme/Icons";

export const screen_width: number = Dimensions.get("window").width;
export const screen_height: number = Dimensions.get("window").height;

export const wp = (val: number) => {
  return widthPercentageToDP(((val / 2) * 100) / screen_width);
};

export const hp = (val: number) => {
  return heightPercentageToDP(((val / 2) * 100) / screen_height);
};

export const isIos = Platform.OS === "ios";
export const isWeb = Platform.OS === "web";

export const isNotchDevice = DeviceInfo.hasNotch();

export const fontSize = (val: number) => RFValue(val, 812);

export const getText = (text: string) => {
  return text;
};

// export const dispatchNavigation = (name: string) => {
//   navigationRef.dispatch(
//     CommonActions.reset({
//       index: 1,
//       routes: [{ name: name }],
//     })
//   );
// };

export const hitSlop = {
  top: hp(10),
  bottom: hp(10),
  left: wp(10),
  right: wp(10),
};
