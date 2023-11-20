//import liraries
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle } from "../../theme/Fonts";

// define your styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1EF",
  },
  tab2View: {
    flexDirection: "row",
    width: screen_width * 0.65,
    paddingVertical: 30,
  },
  tabText: {
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
  },
  ofusText: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 24, colors.black),
  },
  ofusSubText: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  headerText: {
    marginLeft: 35,
    ...commonFontStyle(fontFamily.bold, 32, colors.black),
  },
  headerSubText: {
    marginBottom: 5,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  rightSide: {
    flex: 1,
    paddingVertical: 60,
    paddingLeft: 50,
  },
  rightHeader: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  checkBoxIcon: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 10,
  },
  checkBoxText: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.checkBoxText),
  },
  closeStyle: {
    width: 24,
    height: 24,
    tintColor: "rgba(0, 0, 0, 1)",
    marginVertical: 60,
    // marginLeft:60,
    left: 60,
    // paddingLeft: 50,
  },
  boxStyle: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 50,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  leftIcon: {
    width: 250,
    height: 170,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightTextView: {
    ...commonFontStyle(fontFamily.semiBold, 100, colors.Roheline2),
    letterSpacing: -5,
  },
  rightTextDoller: {
    ...commonFontStyle(fontFamily.semiBold, 26, colors.Roheline2),
  },
  rightTextDollerValue: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.filterText),
  },
  rightSideMin: {
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.headerBG),
  },
  bodyHeader: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.black),
  },
  bodyHeaderText: {
    ...commonFontStyle(fontFamily.semiBold, 28, colors.black),
  },
  boxItem: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
  },
  bodyBoxStyle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 23,
    marginTop: 12,
    borderColor: colors.homecartBG,
  },
});
