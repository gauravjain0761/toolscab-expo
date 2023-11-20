//import liraries
import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "../../theme/Colors";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle } from "../../theme/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  unLineStyle: {
    width: screen_width * 0.75,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
  },
  mainStyle:{
    width: screen_width * 0.75,
    alignSelf: "center",
  },
  cartStyle:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  paymentStyle:{
    flex: 0.3,
    backgroundColor: colors.homecartBG,
    padding: 18,
    borderRadius: 16,
    alignSelf: "flex-start",
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
    ...commonFontStyle(fontFamily.bold, 32, colors.black),
  },
  headerSubText: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
});
