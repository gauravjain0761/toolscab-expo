//import liraries
import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { colors } from "../../theme/Colors";
import { screen_width, wp } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";

import { commonFontStyle,defaultFont } from "../../theme/Fonts";
import { widthPercentageToDP } from "react-native-responsive-screen";

// define your styles
export const styles = StyleSheet.create({
  containerMob: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  headerTextMob:{
    ...defaultFont("700_o", 18, colors.black),
  },
  labelTextMob:{
    ...defaultFont(400, 12, colors.black),
    marginBottom:4,
    left:8
  },
  bodyViewMob:{
    backgroundColor:colors.roheline,
    paddingVertical:10,
    marginTop:20,
    paddingHorizontal:18,
    borderRadius:16,
    
  },
  inputTextMob:{
    flex:1,
    borderWidth:1,
    backgroundColor:colors.bottomLine,
    paddingVertical:12,
    borderRadius:8,
    paddingLeft:12
  },
  epquestionMob:{
    width:14,
    height:14,
    marginBottom:4,
    marginLeft:10
  },
  btnLeftSideMob:{
    borderColor: colors.headerBG,
    width: widthPercentageToDP(32),
    marginTop: 50,
    backgroundColor: colors.white,
    paddingVertical: 10,
  }
});

