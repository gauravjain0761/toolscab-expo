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
    ...defaultFont("700_o", 32, colors.Roheline2),
    alignSelf:'center',
    marginTop:50
  },
  headerSubTextMob:{
    ...defaultFont(400, 14, colors.headerBG),
    alignSelf:'center',
    textAlign:"center",
    marginTop:10,
    lineHeight:14
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
  },
  commoniconStyle:{
    width: 123,
    height: 123,
    alignSelf:'center',
    tintColor:colors.black
  },
  timeViewMob: {
    alignItems: "center",
    marginVertical: 20,
  },
  timeValueStyleMob: {
    ...defaultFont(700, 24, colors.black),
    lineHeight: 26,
  },
  timeTextStyleMob: {
    ...defaultFont(400, 14, colors.headerBG),
    },

  //web
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  headerText:{
    ...commonFontStyle(fontFamily.bold, 32, colors.Roheline2),
    alignSelf:'center',
    marginTop:50
  },
  headerSubText:{
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.headerBG),
    alignSelf:'center',
    textAlign:"center"
  },
  labelText:{
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.black),
    marginBottom:4,
    left:8
  },
  bodyView:{
    backgroundColor:colors.roheline,
    paddingVertical:10,
    marginTop:20,
    paddingHorizontal:18,
    borderRadius:16,
  },
  inputText:{
    flex:1,
    borderWidth:1,
    backgroundColor:colors.bottomLine,
    paddingVertical:12,
    borderRadius:8,
    paddingLeft:12
  },
  epquestion:{
    width:14,
    height:14,
    marginBottom:4,
    marginLeft:10
  },
  btnLeftSide:{
    borderColor: colors.headerBG,
    width: widthPercentageToDP(7),
    marginTop: 50,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  commoniconStyleWeb:{
    width: 123,
    height: 123,
    alignSelf:'center',
    // tintColor:colors.roheline
  }
});

