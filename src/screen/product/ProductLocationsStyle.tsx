//import liraries
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";

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

  //MOBILE
  containerMob: {
    flex: 1,
    backgroundColor: "#F5F1EF",
  },
  tab2ViewMob: {
    // flexDirection: "row",
    // width: screen_width * 0.65,
    paddingVertical: 30,
    marginTop: 290,
  },
  tabTextMob: {
    ...defaultFont(400, 18, colors.black),
  },
  ofusTextMob: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...defaultFont(400, 24, colors.black),
  },
  ofusSubTextMob: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...defaultFont(400, 18, colors.black),
  },
  headerTextMob: {
    ...defaultFont(400, 32, colors.black),
  },
  headerSubTextMob: {
    marginBottom: 5,
    ...defaultFont(400, 18, colors.black),
  },
  rightSideMob: {
    flex: 1,
    // paddingVertical: 60,
    marginHorizontal: 40,
  },
  rightHeaderMob: {
    ...defaultFont(400, 14, colors.headerBG),
  },
  checkBoxMob: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  checkBoxIconMob: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 10,
  },
  checkBoxTextMob: {
    ...defaultFont(400, 12, colors.checkBoxText),
  },
  closeStyleMob: {
    width: 24,
    height: 24,
    tintColor: "rgba(0, 0, 0, 1)",
    marginVertical: 60,
    // marginLeft:60,
    left: 60,
    // paddingLeft: 50,
  },
  boxStyleMob: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 50,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginHorizontal: 24,
    paddingHorizontal: 20,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-evenly",
  },
  leftIconMob: {
    width: 250,
    height: 170,
    alignSelf: "center",
    marginTop: 20,
  },
  priceViewMob: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightTextViewMob: {
    ...defaultFont(500, 100, colors.Roheline2),
    letterSpacing: -5,
  },
  rightTextDollerMob: {
    ...defaultFont(500, 26, colors.Roheline2),
  },
  rightTextDollerValueMob: {
    ...defaultFont(500, 12, colors.filterText),
  },
  rightSideMinMob: {
    ...defaultFont(400, 14, colors.headerBG),
  },
  bodyHeaderMob: {
    lineHeight: 21,
    ...defaultFont(500, 14, colors.black),
  },
  bodyHeaderTextMob: {
    ...defaultFont(400, 27, colors.black),
  },
  boxItemMob: {
    ...defaultFont(400, 12, colors.headerBG),
  },
  bodyBoxStyleMob: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 23,
    marginTop: 12,
    borderColor: colors.homecartBG,
  },
  headermainTextMob: {
    ...defaultFont('600_o', 28, colors.black),
    marginLeft:24
  },
  headerLine:{
   width:'87%',
   borderWidth:0.6,
   alignSelf:'center',
   marginTop:5,
   marginBottom:30
  }
});
