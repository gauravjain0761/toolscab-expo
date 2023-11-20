//import liraries
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: widthPercentageToDP(5),
  },
  logoStyle: {
    width: 123,
    height: 123,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 123 / 2,
    backgroundColor: colors.roheline,
    alignSelf: "center",
    marginTop: 20,
  },
  iconStyle: {
    width: 74,
    height: 67,
    tintColor: colors.black,
  },
  loginText: {
    alignSelf: "center",
    ...defaultFont("600_o", 32, colors.Roheline2),
  },
  regText: {
    lineHeight: 21,
    marginTop: 17,
    marginBottom: 20,
    alignSelf: "center",
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
  headerText: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  btnStyle: {
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(40),
    marginTop: 65,
    alignSelf: "center",
  },
});
