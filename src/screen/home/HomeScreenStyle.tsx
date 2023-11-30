//import liraries
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Platform,
} from "react-native";
import { colors } from "../../theme/Colors";
import { hp, wp } from "../../helper/globalFunctions";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { defaultFont } from "../../theme/Fonts";


export const styles = StyleSheet.create({
  //mobile
  content_1: {
    backgroundColor: colors.roheline,
    paddingTop: 40
  },
  userimageStyleMobile: {
    height: hp(600),
    paddingRight: -200,
    // position: 'absolute',
    left: wp(150),
  },
  buttonStyle2: {
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: wp(30),
    borderBottomRightRadius: wp(30),
    marginTop: heightPercentageToDP(4),
    alignSelf: 'flex-start',
    paddingHorizontal: heightPercentageToDP(2),
    paddingVertical: heightPercentageToDP(1.5)
  },
  stpesView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.headerBG,
    marginHorizontal: heightPercentageToDP(5),
    marginBottom: 7,
    paddingHorizontal: heightPercentageToDP(3),
  },
  buttonStyle3: {
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: wp(30),
    borderBottomRightRadius: wp(30),
    alignSelf: 'flex-end',
    paddingHorizontal: heightPercentageToDP(2),
    paddingVertical: heightPercentageToDP(1.5),
    marginHorizontal: heightPercentageToDP(5),
  },
  title: {
    ...defaultFont('600_o', 32, colors.black),
    textAlign: 'center',
    marginVertical: heightPercentageToDP(5)
  },
  lastContent: {
    backgroundColor: colors.headerColorBg,
    paddingVertical: heightPercentageToDP(5),
    paddingHorizontal: heightPercentageToDP(4),
    marginTop: heightPercentageToDP(6)
  },
  mobileImage: {
    width: 160,
    height: 242,
    position: 'absolute',
    right: 15,
    top: -30,
  },










  //web
  container: {
    flex: 1,
    backgroundColor: Platform.OS == 'web' ? "#FCFCFC" : '#ffffff',
  },
  bannerContainer: {
    backgroundColor: colors.roheline,
    flex: 0.7,
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
});
