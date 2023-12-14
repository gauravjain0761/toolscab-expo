import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

// define your styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerSubText: {
    marginBottom: 5,
    ...commonFontStyle(fontFamily.bold, 32, colors.black),
  },
  unLineStyle: {
    width: screen_width * 0.65,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  tabView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 100,
  },
  boxItem: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
  },
  tabText: {
    lineHeight: 20,
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.headerBG),
  },

  tabBtn: {
    paddingHorizontal: 35,
    paddingVertical: 9,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  checkBoxContent: {
    flexDirection: "row",
    alignItems: "center",
    width: screen_width * 0.25,
  },

  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  checkText: {
    lineHeight: 18,
    marginLeft: 5,
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.black),
  },
  headerText: {
    width: screen_width * 0.25,
    marginBottom: 3,
    marginTop: 5,
    ...commonFontStyle(fontFamily.semiBold, 26, colors.Roheline2),
  },
  btnStyleWeb:{
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(7.8),
    marginTop: 20,
  },
  mainStyleWeb:{
    width: screen_width * 0.65,
    alignSelf: "center",
  },

  textInput: {
    width: 75,
    height: 35,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    borderColor: colors.grey_1,
    backgroundColor: colors.inputBg,
  },
  textInputText:{
  textAlign:'center',
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
  },
  labelText: {
    lineHeight: 20,
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
  },

  //mobile
  containerMob: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerSubTextMob: {
    marginBottom: 5,
    // ...commonFontStyle(fontFamily.bold, 32, colors.black),
    ...defaultFont("700_o", 26, colors.blackType),
    textAlign: "center",
  },
  unLineStyleMob: {
    width: "100%",
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  tabViewMob: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: heightPercentageToDP(2),
  },
  boxItemMob: {
    ...defaultFont(400, 12, colors.blackType),
  },
  tabTextMob: {
    lineHeight: 20,
    ...defaultFont(400, 18, colors.blackType),
  },
  tabBtnMob: {
    paddingHorizontal: 35,
    paddingVertical: 9,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  checkBoxContentMob: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkBoxMob: {
    width: 20,
    height: 20,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5

  },
  checkTextMob: {
    lineHeight: 18,
    marginLeft: 5,
    ...defaultFont(400, 12, colors.blackType),
  },
  headerTextMob: {
    marginBottom: 3,
    marginTop: 5,
    ...defaultFont("700_o", 26, colors.Roheline2),
  },
  mainStyleMob:{
    alignSelf: "center",
    marginHorizontal: widthPercentageToDP(5),
  },
  btnStyle:{
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(35),
    marginTop: 20,
    alignSelf: "center",
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
