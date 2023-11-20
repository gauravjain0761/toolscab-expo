import { Image, StyleSheet, TextInput, View } from "react-native";
import React from "react";


import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";


type Props = {
  title?: string;
  list?: any;
  index?: number;
};

const SearchBar = ({ title, list, index }: Props) => {

  return (
    <View
    style={styles.container}
  >
    <TextInput placeholder="" style={styles.textInput} />
    <Image
      source={icons.search}
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
