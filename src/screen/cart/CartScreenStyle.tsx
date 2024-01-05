//import liraries
import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "../../theme/Colors";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle,defaultFont } from "../../theme/Fonts";

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

  //mobile
  containerMob: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  unLineStyleMob: {
    // width: screen_width * 0.75,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
  },
  mainStyleMob:{
    // width: screen_width * 0.75,
    // alignSelf: "center",
    marginHorizontal:24
  },
  cartStyleMob:{
    flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    marginTop: 30,
  },
  paymentStyleMob:{
    flex: 0.3,
    backgroundColor: colors.homecartBG,
    padding: 18,
    borderRadius: 16,
    alignSelf: "flex-start",
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
    ...defaultFont(700, 32, colors.black),
  },
  headerSubTextMob: {
    ...defaultFont(400, 14, colors.black),
  },
  commoniconStyle:{
    width:47,
    height:47
  },
  listTest1:{
    ...defaultFont(700, 14, colors.filterText),
  },
  listTest2:{
    ...defaultFont(400, 14, colors.filterText),
  },
  listTest3:{
    marginTop:15,
    ...defaultFont(400, 14, colors.filterText),
  },
});
