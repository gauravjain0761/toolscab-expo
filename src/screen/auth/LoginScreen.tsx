//import liraries
import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  CommonMapView,
  FooterView,
  Header,
  InpuText,
  RenderMapRow,
  SearchBar,
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily, screenName } from "../../helper/constants";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../../components/common/CommonGreenBtn";
import { navigationRef } from "../../navigations/MainNavigator";

const CheckBoxView = ({ title, style }: any) => {
  return (
    <View style={[styles.checkBoxContent, style]}>
      <View style={styles.checkBox}></View>
      <Text style={styles.checkText}>{title}</Text>
    </View>
  );
};

// create a component
const LoginScreen = () => {
  const [selectTab, setSelectTab] = useState(1);
  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20, }}> */}

      <View style={styles.logoStyle}>
        <Image source={icons.mapImg} style={styles.iconStyle} />
      </View>
      <View style={{ marginTop: heightPercentageToDP(2), flex: 1 }}>
        <Text style={styles.loginText}>Logi sisse</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={styles.regText}>Ei ole veel kontot? </Text>
          <TouchableOpacity
            onPress={() => {
              navigationRef.navigate(screenName.registerScreen);
            }}
          >
            <Text
              style={[styles.regText,{
                color: colors.Roheline2,
                textDecorationLine: "underline",
              }]}
            >
              Registreeri
            </Text>
          </TouchableOpacity>
        </View>
        <InpuText label={"E-post"} />
        <InpuText label={"Parool"} />
        <Text
          style={{
            ...defaultFont(400, 14, colors.blackType),
            alignSelf: "center",
          }}
        >
          Unustasid parooli?
        </Text>
        <CommonGreenBtn
          title="Jätka"
          onPress={() => {navigationRef.navigate(screenName.homeScreen)}}
          style={{
            borderColor: colors.headerBG,
            marginLeft: 10,
            width: widthPercentageToDP(40),
            marginTop: 65,
            alignSelf: "center",
          }}
        />
        <View style={{ height: 50 }} />
      </View>

      {/* </ScrollView> */}
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: widthPercentageToDP(5),
  },
  logoStyle: {
    width: 123,
    height: 123,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 123 / 2,
    backgroundColor: colors.roheline,
    alignSelf: "center",
    marginTop:20
  },
  iconStyle: {
    width: 74,
    height: 67,
    tintColor: colors.black,
  },
  loginText: {
    alignSelf: "center",
    ...defaultFont("600_o", 32, colors.Roheline2),
  },
  regText: {
    lineHeight: 21,
    marginTop: 17,
    marginBottom: 20,
    alignSelf: "center",
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
});

//make this component available to the app
export default LoginScreen;
