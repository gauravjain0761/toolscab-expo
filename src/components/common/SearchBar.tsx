import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import CommonGreenBtn from "./CommonGreenBtn";

type Props = {
  title?: string;
  list?: any;
  index: number;
};

const SearchBar = ({ title, list, index }: Props) => {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <View
    style={styles.container}
  >
    <TextInput placeholder="" style={styles.textInput} />
    <Image
      source={require("../../assets/icon/search.png")}
      style={styles.iconStyle}
    />
  </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
 
  container:{
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 100,
    marginVertical: 10,
  },
  textInput:{
    flex: 1, height: 45
  },
  iconStyle:{
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 20,
  }
  

});
