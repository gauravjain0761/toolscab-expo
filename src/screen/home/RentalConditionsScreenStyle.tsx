//import liraries
import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "../../theme/Colors";
import { fontFamily } from "../../helper/constants";

import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { screen_width } from "../../helper/globalFunctions";
import { heightPercentageToDP } from "react-native-responsive-screen";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
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

  //web
  mainStyleWeb:{
    width: screen_width * 0.7,
    alignSelf: "center",
    paddingHorizontal: 24,
    marginBottom: 32,
    paddingVertical: 10,
  },
  listTextWeb:{
    flex: 1,
    ...commonFontStyle(
      fontFamily.articulat_normal,
      24,
      colors.black
    ),
  },
  listSubTextWeb:{
    lineHeight: 20,
    marginBottom: 30,
    ...commonFontStyle(
      fontFamily.articulat_normal,
      18,
      colors.black
    ),
  },

  //mobile

  mainStyleMob:{
    width: screen_width * 1,
    alignSelf: "center",
    paddingHorizontal: 24,
  },
  listTextMob:{
    flex: 1,
                    ...defaultFont(400, 24, colors.black),
  },
  listSubTextMob:{
    lineHeight: 20,
    marginBottom: heightPercentageToDP(6),
    marginTop: heightPercentageToDP(2),
    ...defaultFont(400, 18, colors.black),
  }
});