//import liraries
import React from "react";
import {
  StyleSheet,
} from "react-native";
import { colors } from "../../theme/Colors";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle,defaultFont} from "../../theme/Fonts";
import { screen_width } from "../../helper/globalFunctions";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";


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
  listMainWeb:{
    width: screen_width * 0.7,
    alignSelf: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.headerColorBg,
    marginBottom: 32,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  listTextWeb:{
    lineHeight: 20,
    marginBottom: 20,
    ...commonFontStyle(
      fontFamily.articulat_normal,
      18,
      colors.black
    ),
  },

  //mobile

  containerMob: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  ofusTextMob: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 24, colors.black),
  },
  ofusSubTextMob: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  mainStyleMob:{
    flexGrow: 1,
    marginTop: heightPercentageToDP(4),
  },
  listStyleMob:{
    width: screen_width * 0.9,
    flex: 1,
    alignSelf: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.headerColorBg,
    marginBottom: heightPercentageToDP(4),
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  listViewMob:{
    flexDirection: "row",
    alignItems: "center",
  },
  listTextMob:{
    flex: 1,
    ...defaultFont(400, 18, colors.blackType),
  },
  downIconMob:{
    width: 20,
    height: 20,
   
  },
  subTextMob:{
    lineHeight: 20,
    marginBottom: widthPercentageToDP(4),
    marginTop: widthPercentageToDP(2),
    ...defaultFont(400, 18, colors.blackType),
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
