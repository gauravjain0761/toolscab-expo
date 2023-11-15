import { Image, StyleSheet, Text,  View } from "react-native";
import React, { useState } from "react";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";

type Props = {
  title: string;
  list: any;
};

const CartPreviousList = ({ title, list }: Props) => {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={icons.image1}
          style={styles.iconsStyle}
          resizeMode="contain"
        />
        <View style={{ marginLeft: 30, flex: 0.9 }}>
          <Text style={styles.headerText}>Tekstiilipesur</Text>
          <Text style={styles.headerText1}>KARCHER Puzzi 10/1</Text>
          <View style={styles.underLine} />
          <Text style={styles.headerText2}>
            Automaat Tallinna Nautica keskus{" "}
            <Text style={styles.headerSubText2}>Ahtri 9, Tallinn, Eesti</Text>
          </Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={[styles.headerText4,{color:colors.black,marginRight:8}]}>Maksumus:</Text>
            <Text style={styles.headerText3}>0,22€/min</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View>
        <Text style={styles.headerText6}>{"00:25 min"}</Text>
        <Text style={styles.headerText7}>{"23.05.2023"}</Text>
        <CommonGreenBtn
          title="Rendi uuesti"
          onPress={() => {}}
          style={{
            borderColor: colors.headerBG,
            marginLeft: 10,
            width:widthPercentageToDP(7),marginTop:8
          }}
        />
        <Text style={styles.headerText5}>{"PDF arve"}</Text>
      </View>
    </View>
  );
};

export default CartPreviousList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom:10,
    marginLeft:-20,
    marginTop:20,
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
    marginVertical: 8,
    borderColor: colors.headerColorBg,
    // flex:0.5
  },
  iconsStyle: {
    width: 120,
    height: 120,
  },
  headerText: {
    lineHeight: 18,

    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  headerText1: {
    lineHeight: 20,
    marginTop: 8,
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
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 5,
    marginTop:4,
    textDecorationLine:'underline',
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.black),
  },
  headerText6: {
    textAlign: "center",
    lineHeight: 24,
    ...commonFontStyle(fontFamily.articulat_bold, 24, colors.headerBG),
  },
  headerText7: {
    lineHeight: 18,
    textAlign:'center',
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  itemText: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.checkBoxText),
  },
});
