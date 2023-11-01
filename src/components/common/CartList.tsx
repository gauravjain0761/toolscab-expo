import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { hp, screen_width } from "../../helper/globalFunctions";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";

type Props = {
  title: string;
  list: any;
};

const CartList = ({ title, list }: Props) => {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={icons.image1}
          style={styles.iconsStyle}
          resizeMode="contain"
        />
        <View style={{ marginLeft: 30,flex:0.9}}>
          <Text style={styles.headerText}>Tekstiilipesur</Text>
          <Text style={styles.headerText1}>KARCHER Puzzi 10/1</Text>
          <View style={styles.underLine} />
          <Text style={styles.headerText2}>
            Automaat Tallinna Nautica keskus{" "}
            <Text style={styles.headerSubText2}>Ahtri 9, Tallinn, Eesti</Text>
          </Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={styles.headerText3}>0,22€/min</Text>
            <Text style={styles.headerText4}>eemalda</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View>
        <Text style={styles.headerText5}>{"+0,05€/min"}</Text>
        <Text style={styles.headerText6}>{"14:59"}</Text>
        <Text style={styles.headerText7}>{"Ava kapp"}</Text>
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  bodyHeader: {
    alignItems: "flex-start",
  },
  boxConainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  underLine: {
    borderWidth: 0.5,
    marginVertical:8,
    borderColor:colors.headerColorBg
    // flex:0.5
  },
  iconsStyle: {
    width: 100,
    height: 100,
  },
  headerText: {
    lineHeight: 18,

    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  headerText1: {
    lineHeight: 20,
    marginTop:8,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  headerText2: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
  },
  headerSubText2: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
  headerText3: {
    backgroundColor: colors.roheline,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    marginRight: 9,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.headerBG),
  },
  headerText4: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.red),
  },
  headerText5: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  headerText6: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  headerText7: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  itemText: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.checkBoxText),
  },
});
