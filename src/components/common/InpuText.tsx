import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import CommonGreenBtn from "./CommonGreenBtn";
import { screen_width } from "../../helper/globalFunctions";

type Props = {
  label?: string;
  list?: any;
};

const InpuText = ({ label, list }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput placeholder="" style={styles.textInput} />
    </View>
  );
};

export default InpuText;

const styles = StyleSheet.create({
  container: {
    marginBottom:16
  },
  textInput: {
    width:screen_width*0.25,
    height: 35,
    borderWidth:1,
    marginTop:5,
    borderRadius:5,
    borderColor:colors.grey_1,
    backgroundColor:colors.inputBg
  },
  iconStyle: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 20,

  },
  labelText:{
    lineHeight:20,
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
  }
});
