import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { commonFontStyle,defaultFont } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import CommonGreenBtn from "./CommonGreenBtn";
import { screen_width } from "../../helper/globalFunctions";

type Props = {
  label?: string;
  list?: any;
};

const InpuText = ({ label, list }: Props) => {
  if(Platform.OS === 'web'){
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{label}</Text>
        <TextInput placeholder="" style={styles.textInput} />
      </View>
    );
  }else{
    return (
      <View style={styles.containerMob}>
        <Text style={styles.labelTextMob}>{label}</Text>
        <TextInput placeholder="" style={styles.textInputMob} />
      </View>
    );
  }
 
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
  },



  //Mobile
  containerMob: {
    marginBottom:16
  },
  textInputMob: {
    // width:screen_width,
    height: 35,
    borderWidth:1,
    marginTop:5,
    borderRadius:5,
    borderColor:colors.grey_1,
    backgroundColor:colors.inputBg
  },
  iconStyleMob: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 20,

  },
  labelTextMob:{
    lineHeight:20,
    ...defaultFont(400, 18, colors.black),
    
    
  }
});
