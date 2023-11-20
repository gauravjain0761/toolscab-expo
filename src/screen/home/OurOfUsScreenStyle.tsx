//import liraries
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import {
  hp,
  screen_height,
  screen_width,
  wp,
} from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle } from "../../theme/Fonts";

// define your styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  userimageStyle: {
    width: wp(550),
    height: hp(600),
    marginLeft: wp(120),
    marginBottom: -hp(40),
  },
  buttonStyle: {
    backgroundColor: colors.black,
    alignSelf: "flex-end",
    padding: wp(15),
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: wp(30),
    borderBottomRightRadius: wp(30),
    marginTop: hp(25),
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
  mainStyle: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  imgStyle: {
    flex: 0.6,
    alignItems: "center",
    marginTop: hp(100),
  },
  toolscabStyle: {
    alignItems: "flex-end",
    marginTop: hp(100),
  },
  toolscabIconStyle: {
    width: 745,
    height: 588,
  },
  ofusView: {
    alignItems: "center",
    width: screen_width * 0.73,
    alignSelf: "center",
    marginTop: 150,
  },
  tarkRentView: {
    height: screen_height * 0.67,
    backgroundColor: "#E5E1CC",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 100,
  },
  tarkRentText: {
    fontSize: 128,
    fontFamily: fontFamily.bold,
    // letterSpacing: -2.84,
    color: colors.black,
    lineHeight: 115,
  },
  tarkRentSubText:{
    fontSize: 18,
    lineHeight: 20,
    fontFamily: fontFamily.articulat_regular,
    letterSpacing: -0.8,
    color: colors.black,
    alignSelf: "center",
  },
  phoneIcon:{
    width: 390, height: 510
  }
});
