import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { screen_width } from "../../helper/globalFunctions";

type Props = {
  label?: string;
  list?: any;
  onChangeText?: (text: any) => void;
  value?: string;
  secureTextEntry?: boolean;
  style: any;
  maxLength: number;
  placeholder?: string;
};

const InpuText = ({
  label,
  list,
  value,
  onChangeText,
  secureTextEntry,
  style,
  maxLength,
  placeholder,
}: Props) => {
  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          style={[styles.textInput, style]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          placeholderTextColor={colors.grey}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.containerMob}>
        <Text style={styles.labelTextMob}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          style={[styles.textInputMob, style]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
        />
      </View>
    );
  }
};

export default InpuText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  textInput: {
    width: screen_width * 0.25,
    height: 35,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    borderColor: colors.grey_1,
    backgroundColor: colors.inputBg,
    paddingLeft: 15,
  },
  iconStyle: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 20,
  },
  labelText: {
    lineHeight: 20,
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
  },

  //Mobile
  containerMob: {
    marginBottom: 16,
  },
  textInputMob: {
    // width:screen_width,
    height: 35,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    borderColor: colors.grey_1,
    backgroundColor: colors.inputBg,
    paddingLeft: 15,
  },
  iconStyleMob: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 20,
  },
  labelTextMob: {
    // lineHeight: 18,
    ...defaultFont(400, 18, colors.black),
  },
});
