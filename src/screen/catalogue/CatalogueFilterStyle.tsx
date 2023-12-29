//import liraries
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { hp, screen_height, screen_width } from "../../helper/globalFunctions";

// define your styles
export const styles = StyleSheet.create({
  // mobile
  title: {
    ...defaultFont("600_o", 32, colors.black),
    marginTop: heightPercentageToDP(6),
    marginBottom: heightPercentageToDP(4),
    textAlign: "center",
  },
  filterView: {
    position: "absolute",
    bottom: heightPercentageToDP(2),
    paddingLeft: heightPercentageToDP(2),
  },
  filterIcon: {
    height: 75,
    width: 75,
    resizeMode: "contain",
  },
  imageBgStyleMob: {
    width: SCREEN_WIDTH - heightPercentageToDP(4),
    height: SCREEN_WIDTH - heightPercentageToDP(4),
    alignSelf: "center",
    marginVertical: heightPercentageToDP(4),
    marginBottom: heightPercentageToDP(6),
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 48,
  },
  tab2MainStyleMob: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 100,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    height: 45,
    top:20,
  },
  textInputStyleMob: {
    flex: 1,
    height: 45,
   borderTopLeftRadius:20,
   borderBottomLeftRadius:20,
   paddingLeft:20,
   ...defaultFont(400, 18, colors.black),
  },
  searchViewMob: {
    backgroundColor: colors.black,
    height: 46,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
    borderColor:colors.black,
   
  },
  searchIconMob: {
    height: 24,
    width: 24,
    resizeMode: "contain",
    // marginRight: 20,
    paddingVertical: 10,
    tintColor: colors.white,
  },

  // web
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerBody: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  mainStyleWeb: {
    width: screen_width * 0.75,
    alignSelf: "center",
    marginTop: hp(60),
  },
  tab2MainStyleWeb: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 100,
    marginVertical: 10,
    width: 600,
    alignSelf: "center",
    height: 45,
  },
  textInputStyleWeb: {
    flex: 1,
    height: 45,
   borderTopLeftRadius:20,
   borderBottomLeftRadius:20,
   paddingLeft:20,
   ...commonFontStyle(fontFamily.articulat_regular, 22, colors.black),
   
  },
  searchViewWeb: {
    backgroundColor: colors.black,
    height: 46,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
    borderColor:colors.black,
   
  },
  searchIconWeb: {
    height: 24,
    width: 24,
    resizeMode: "contain",
    // marginRight: 20,
    paddingVertical: 10,
    tintColor: colors.white,
  },
  imageBgStyleWeb: {
    width: screen_width * 0.65,
    height: screen_height * 0.35,
    justifyContent: "center",
    alignItems: "center",
  },
  imageTextWeb: {
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.white),
  },
  leftView: {
    flex: 0.3,
    alignItems: "flex-start",
  },
  leftHeaderText: {
    marginBottom: 10,
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
  },
  leftHeaderItemText: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
  rightView: {
    flex: 1,
  },
  showProductStyle: {
    marginTop: 115,
    alignItems: "center",
    marginBottom: 65,
  },
});
