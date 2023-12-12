import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  CommonMapView,
  FooterView,
  Header,
  ProductView,
} from "../../components";
import { colors } from "../../theme/Colors";
import { hp, screen_width, wp } from "../../helper/globalFunctions";
import HeaderBottomPathView from "../../components/reusableComponent/HeaderBottomPathView";
import { icons } from "../../theme/Icons";
import { FlatList } from "react-native";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { defaultFont } from "../../theme/Fonts";

export const styles = StyleSheet.create({
  // mobile
  contentView: {
    marginHorizontal: heightPercentageToDP(3),
  },
  title: {
    ...defaultFont("600_o", 28, colors.black),
    marginBottom: heightPercentageToDP(4),
  },
  titleDes: {
    ...defaultFont(400, 14, colors.black),
    marginTop: heightPercentageToDP(6),
  },
  mainImage: {
    width: SCREEN_WIDTH - heightPercentageToDP(6),
    height: SCREEN_WIDTH - heightPercentageToDP(20),
    resizeMode: "contain",
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceViewMob: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowImageMob: {
    height: 26,
    width: 26,
    resizeMode: "contain",
    marginRight: 10,
  },
  botomLineMob: {
    height: 1,
    backgroundColor: colors.bottomLine,
  },

  prodDes2: {
    ...defaultFont(400, 12, colors.headerBG),
    marginBottom: 5,
  },
  btnRowMob: {
    flexDirection: "row",
    marginTop: heightPercentageToDP(3),
    marginBottom: heightPercentageToDP(1),
  },
  btnBottomTextMob: {
    ...defaultFont(400, 10, colors.black),
  },
  desProduct: {
    ...defaultFont(400, 14, colors.black),
    marginTop: heightPercentageToDP(5),
    marginBottom: heightPercentageToDP(4),
    lineHeight: 20,
  },
  downarrowMob: {
    width: widthPercentageToDP(4),
    height: widthPercentageToDP(4),
    marginLeft: widthPercentageToDP(3),
  },
  boxStyleMob: {
    backgroundColor: colors.roheline,
    flex: 1,
    paddingVertical: heightPercentageToDP(2.5),
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  boxBodyMob: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  boxBodyText: {
    ...defaultFont(400, 18, colors.headerBG),
  },
  devicesText: {
    marginTop: heightPercentageToDP(8),
    textAlign: "center",
    marginBottom: heightPercentageToDP(2),
    ...defaultFont(400, 24, colors.black),
  },
  tab1ViewMob: {
    // width: screen_width * 0.55,
    // width: screen_width,
    // paddingVertical: 60,
    backgroundColor: colors.bottomLine,
    paddingTop: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(2),
    top: heightPercentageToDP(-1.3),
  },
  tab2ViewMob: {
    flexDirection: "row",
    width: screen_width * 0.8,
    alignSelf: "center",
  },
  tab2ViewStyleMob: {
    flex: 1,
    paddingVertical: 60,
  },
  tab2ViewTextMob: {
    ...defaultFont(400, 14, colors.headerBG),
  },
  tab2MainStyleMob: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 100,
    marginVertical: 10,
  },
  searchIconMob: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 20,
  },
  checkboxViewMob: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  checkboxIconMob: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 10,
  },
  checkboxTextMob: {
    ...defaultFont(400, 12, colors.checkBoxText),
  },

  rendermapTextMob: {
    ...defaultFont(400, 12, colors.headerBG),
  },
  rendermapViewMob: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingBottom: 10,
  },
  renderTextMob: {
    ...defaultFont(700, 14, colors.headerBG),
  },
  rendersubTextMob: {
    ...defaultFont(400, 9, colors.filterText),
    marginTop: -3,
  },
  rendersubValueTextMob: {
    ...defaultFont(400, 9, colors.filterText),
  },
  btnRenderMob: {
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(28),
  },
  lineView: {
    borderBottomWidth: 1,
    borderBottomColor: colors.Roheline2,
    flex: 1,
    marginRight: 15
  },
  btnViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  bannerViewMob: {
    backgroundColor: colors.roheline,
    width: '70%',
    paddingVertical: 3,
    position: 'absolute',
    right: -15,
    top: 15,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10

  },
  bannerTextMob: {
    ...defaultFont(400, 9, colors.black),
    textAlign: 'center'
  },


  // web
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    width: screen_width * 0.75,
    alignSelf: "center",
    marginTop: hp(60),
  },
  bodyHeader: {
    alignItems: "flex-start",
  },
  unLineStyle: {
    width: screen_width * 0.75,
    borderWidth: 1,
    height: 2,
    borderColor: "#F5F1EF",
    marginVertical: hp(50),
  },
  mainContentView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageProduct: {
    height: 300,
    width: (screen_width * 0.75) / 1.7,
    resizeMode: "contain",
  },
  bottomImages: {
    width: 100,
    height: 55,
    backgroundColor: colors.grey_1,
    marginRight: 15,
    marginTop: 20,
  },
  des: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
    lineHeight: 21,
    marginTop: 20,
    width: (screen_width * 0.75) / 1.7,
  },
  title1: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
  rightView: {
    flex: 1,
    marginLeft: 50,
  },
  mainTitle: {
    ...commonFontStyle(fontFamily.semiBold, 28, colors.black),
  },
  botomLine: {
    height: 1,
    backgroundColor: colors.homecartBG,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowImage: {
    height: 32,
    width: 32,
    resizeMode: "contain",
    marginRight: 10,
  },
  btnRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  btnBottomText: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.black),
    paddingVertical: 10,
  },
  title2: {
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
    marginTop: 10,
    marginBottom: 3,
  },
  des2: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
  },
  middleMainView: {
    backgroundColor: colors.homecartBG,
  },
  tabView: {
    width: "30%",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
    alignItems: "center",
    paddingVertical: 5,
  },
  tabText: {
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.headerBG),
  },
  whiteLine: {
    height: 1,
    backgroundColor: colors.white,
    marginVertical: 12,
  },
  tab1View: {
    width: screen_width * 0.55,
    alignSelf: "center",
    paddingVertical: 60,
  },

  whiteLineHalf: {
    height: 0.5,
    backgroundColor: colors.white,
    marginVertical: 12,
  },
  tab2View: {
    flexDirection: "row",
    width: screen_width * 0.75,
    paddingVertical: 30,
  },
  zeroText: {
    ...commonFontStyle(fontFamily.semiBold, 100, colors.Roheline2),
    letterSpacing: -5,
  },
  zeroTextDoller: {
    ...commonFontStyle(fontFamily.semiBold, 26, colors.Roheline2),
  },
  valueText: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.filterText),
  },
  minText: {
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.headerBG),
  },
  arrowViewStyle: {
    flex: 1,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowText: {
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.black),
  },
  btnView: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    marginLeft: 10,
  },
  tab1TextStyle: {
    ...commonFontStyle(fontFamily.arial_regular, 16, colors.blackType),
  },
  tab2ViewStyle: {
    flex: 1,
    paddingVertical: 60,
    paddingLeft: 50,
  },
  tab2ViewText: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
  tab2MainStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 100,
    marginVertical: 10,
  },
  searchIcon: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 20,
  },
  checkboxView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  checkboxIcon: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 10,
  },
  checkboxText: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.checkBoxText),
  },
  rendermapText: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
  },
  rendermapView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.Roheline2,
    paddingBottom: 10,
    marginBottom: 10,
  },
  renderText: {
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.headerBG),
  },
  rendersubText: {
    ...commonFontStyle(fontFamily.articulat_regular, 9, colors.filterText),
    marginTop: -3,
  },
  rendersubValueText: {
    ...commonFontStyle(fontFamily.articulat_regular, 9, colors.filterText),
  },
  btnRender: {
    borderColor: colors.headerBG,
    marginLeft: 10,
  },

  //renderrow web
  renderRowWeb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  renderRowTextWeb: {
    ...commonFontStyle(fontFamily.arial_regular, 13, colors.blackType),
  },

  //renderrow mobile
  renderRowMob: {
    flexDirection: "row",
    alignItems: "center",

    flex: 1,
  },
  renderRowTextMob: {
    ...commonFontStyle(fontFamily.arial_regular, 13, colors.blackType),
  },
  renderRowViewMob: {
    paddingLeft: 20,
    flex: 1,
    marginRight: widthPercentageToDP(10),
  },
});
