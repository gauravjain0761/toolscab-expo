//import liraries
import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { colors } from "../../theme/Colors";
import { screen_width, wp } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";

import { commonFontStyle,defaultFont } from "../../theme/Fonts";

// define your styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  unLineStyle: {
    width: screen_width * 0.6,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  tabText: {
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
  },
  tabView: {
    // width: '1%',
    // borderBottomColor: 'transparent',
    paddingHorizontal: 40,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 5,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
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

  //mobile

  containerMob: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  unLineStyleMob: {
    width: screen_width * 0.85,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
    alignItems: "center",
    // alignSelf: "center",
  },
  tabTextMob: {
    ...defaultFont(400, 14, colors.black),
  },
  tabViewMob: {
    // width: '1%',
    // borderBottomColor: 'transparent',
    paddingHorizontal: 10,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 5,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginTop:10
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
    ...defaultFont("700_o", 32, colors.black),

  },
  headerSubTextMob: {
    marginBottom: 5,
    ...defaultFont(400, 18, colors.black),
  },
});

